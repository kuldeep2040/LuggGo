package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"github.com/kuldeep2040/LuggGo/handlers"
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

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173", 
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Post("/register", handlers.Register)
	app.Post("/login", handlers.Login)
//  APIs
	app.Get("/api/storagepoints", handlers.GetStoragePoints)


	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
