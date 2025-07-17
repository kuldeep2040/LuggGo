package handlers

import (
	"encoding/json"
	"os"

	"github.com/gofiber/fiber/v2"
	supabase_go "github.com/supabase-community/supabase-go"
)

func GetStoragePoints(c *fiber.Ctx) error {
	supabaseUrl := os.Getenv("SUPABASE_URL")
	supabaseKey := os.Getenv("SUPABASE_ANON_KEY")

	println("🔍 SUPABASE_URL:", supabaseUrl)
	println("🔍 SUPABASE_KEY:", supabaseKey)


	// Initialize Supabase client
	supabase, err := supabase_go.NewClient(supabaseUrl, supabaseKey, nil)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to initialize Supabase client"})
	}

	// Perform SELECT query
	data, _, err := supabase.
		From("storage_points").
		Select("*", "", false). // columns, head, count
		Execute()

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	// Unmarshal the []byte JSON response
	var storagePoints []map[string]interface{}
	if err := json.Unmarshal(data, &storagePoints); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to parse Supabase response"})
	}

	return c.JSON(storagePoints)
}
