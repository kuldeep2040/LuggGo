package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("🚀 LuggGo API is live")
	})

	app.Post("/register", )

	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
