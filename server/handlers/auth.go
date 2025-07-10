package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
)

type SignUpRequest struct {
	Email        string `json:"email"`
	Password     string `json:"password"`
	FullName     string `json:"full_name"`
	Phone        string `json:"phone"`
	ProfileImage string `json:"profile_image"`
	Role         string `json:"role"`
	City         string `json:"city"`
	Country      string `json:"country"`
}

func Register(c *fiber.Ctx) error {
	var body SignUpRequest
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request"})
	}

	// Step 1: Supabase Auth signup
	authBody := map[string]string{
		"email":    body.Email,
		"password": body.Password,
	}
	authJSON, _ := json.Marshal(authBody)
	fmt.Println("Signup Auth Payload:", string(authJSON))

	authReq, _ := http.NewRequest("POST", os.Getenv("SUPABASE_URL")+"/auth/v1/signup", bytes.NewBuffer(authJSON))
	authReq.Header.Set("apikey", os.Getenv("SUPABASE_ANON_KEY"))
	authReq.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	authRes, err := client.Do(authReq)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to call Supabase Auth"})
	}
	defer authRes.Body.Close()

	var authResp map[string]interface{}
	if err := json.NewDecoder(authRes.Body).Decode(&authResp); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to decode Supabase response"})
	}
	fmt.Println("Supabase signup response:", authResp)

	userRaw, ok := authResp["user"]
	if !ok || userRaw == nil {
		return c.Status(500).JSON(fiber.Map{
			"error":   "User creation failed",
			"details": authResp,
		})
	}

	user := userRaw.(map[string]interface{})
	userID := user["id"].(string)

	// Step 2: Insert extra info in users table
	userData := map[string]interface{}{
		"id":            userID,
		"full_name":     body.FullName,
		"phone":         body.Phone,
		"profile_image": body.ProfileImage,
		"role":          body.Role,
		"city":          body.City,
		"country":       body.Country,
	}
	userJSON, _ := json.Marshal(userData)

	dbReq, _ := http.NewRequest("POST", os.Getenv("SUPABASE_URL")+"/rest/v1/users", bytes.NewBuffer(userJSON))
	dbReq.Header.Set("apikey", os.Getenv("SUPABASE_SERVICE_ROLE"))
	dbReq.Header.Set("Authorization", "Bearer "+os.Getenv("SUPABASE_SERVICE_ROLE"))
	dbReq.Header.Set("Content-Type", "application/json")

	dbRes, err := client.Do(dbReq)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to insert into users table"})
	}
	defer dbRes.Body.Close()

	return c.JSON(fiber.Map{
		"message": "User registered successfully",
		"user_id": userID,
	})
}


func Login(c *fiber.Ctx) error {
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request"})
	}

	// Supabase login request
	loginBody := map[string]string{
		"email":    body.Email,
		"password": body.Password,
	}
	loginJSON, _ := json.Marshal(loginBody)

	req, _ := http.NewRequest("POST", os.Getenv("SUPABASE_URL")+"/auth/v1/token?grant_type=password", bytes.NewBuffer(loginJSON))
	req.Header.Set("apikey", os.Getenv("SUPABASE_ANON_KEY"))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to contact Supabase"})
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to decode response"})
	}

	// Check if error
	if resp.StatusCode != 200 {
		return c.Status(resp.StatusCode).JSON(fiber.Map{
			"error":   "Login failed",
			"details": result,
		})
	}

	return c.JSON(fiber.Map{
		"message": "Login successful",
		"access_token": result["access_token"],
		"user": result["user"],
	})
}
