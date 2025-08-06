package controllers

import (
	"context"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"mongo/config"
	"mongo/models"
	"mongo/utils"
)

var userCollection *mongo.Collection = config.DB.Collection("users")

func Signup(c *fiber.Ctx) error {
	var body models.User
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}

	// check if user exists
	count, _ := userCollection.CountDocuments(context.TODO(), bson.M{"email": body.Email})
	if count > 0 {
		return c.Status(400).JSON(fiber.Map{"error": "User already exists"})
	}

	hash, _ := utils.HashPassword(body.Password)
	body.Password = hash
	body.CreatedAt = time.Now().Format(time.RFC3339)

	_, err := userCollection.InsertOne(context.TODO(), body)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create user"})
	}

	return c.Status(201).JSON(fiber.Map{"message": "Signup successful"})
}

func Login(c *fiber.Ctx) error {
	var body models.User
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}

	var user models.User
	err := userCollection.FindOne(context.TODO(), bson.M{"email": body.Email}).Decode(&user)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid email or password"})
	}

	if err := utils.CheckPassword(user.Password, body.Password); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid email or password"})
	}

	token, _ := utils.GenerateJWT(user.Email)
	return c.JSON(fiber.Map{"token": token})
}
