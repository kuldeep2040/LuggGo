package routes

import (
	"github.com/gofiber/fiber/v2"
	"mongo/controllers"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")
	api.Post("/signup", controllers.Signup)
	api.Post("/login", controllers.Login)
}
