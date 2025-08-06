# Go Fiber Authentication API

A RESTful authentication API built with Go Fiber and MongoDB Atlas, featuring user signup and login functionality with JWT authentication.

## Features

- User registration (signup)
- User authentication (login)
- JWT token-based authentication
- Password hashing with bcrypt
- MongoDB Atlas integration
- CORS support
- Request logging
- Protected routes with middleware

## Prerequisites

- Go 1.21 or higher
- MongoDB Atlas account (or local MongoDB instance)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mongo
```

2. Install dependencies:
```bash
go mod tidy
```

3. Set up environment variables:
```bash
# Create a .env file or set environment variables
export MONGO_URI="your-mongodb-atlas-connection-string"
export JWT_SECRET="your-secret-key"
export PORT="3000"
```

## Running the Application

1. Start the server:
```bash
go run main.go
```

The server will start on `http://localhost:3000` (or the port specified in the PORT environment variable).

## API Endpoints

### Health Check
- **GET** `/health` - Check if the server is running

### Authentication

#### Signup
- **POST** `/api/auth/signup`
- **Body:**
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890" // optional
}
```
- **Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

#### Login
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### Protected Routes

#### Get Profile
- **GET** `/api/protected/profile`
- **Headers:** `Authorization: Bearer <jwt-token>`
- **Response:**
```json
{
  "message": "Protected route accessed successfully",
  "user_id": "user-id"
}
```

## Database Schema

The application uses MongoDB with the following user schema:

```go
type User struct {
    ID        primitive.ObjectID `json:"id" bson:"_id,omitempty"`
    FullName  string            `json:"full_name" bson:"full_name"`
    Phone     string            `json:"phone,omitempty" bson:"phone,omitempty"`
    Email     string            `json:"email" bson:"email"`
    Password  string            `json:"password" bson:"password"`
    CreatedAt time.Time         `json:"created_at" bson:"created_at"`
}
```

## Project Structure

```
mongo/
├── config/
│   └── database.go      # MongoDB connection configuration
├── handlers/
│   └── auth.go          # Authentication handlers (signup, login)
├── middleware/
│   └── auth.go          # JWT authentication middleware
├── models/
│   └── user.go          # User model and request/response structs
├── utils/
│   └── auth.go          # JWT and password utilities
├── main.go              # Application entry point
├── go.mod               # Go module file
└── README.md            # This file
```

## Environment Variables

- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: Secret key for JWT token signing
- `PORT`: Server port (default: 3000)

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- CORS configuration
- Input validation
- Error handling

## Testing the API

You can test the API using curl or any API client like Postman:

### Signup
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "+1234567890"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Access Protected Route
```bash
curl -X GET http://localhost:3000/api/protected/profile \
  -H "Authorization: Bearer <your-jwt-token>"
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400 Bad Request`: Invalid request body or missing required fields
- `401 Unauthorized`: Invalid credentials or missing/invalid token
- `409 Conflict`: User already exists (signup)
- `500 Internal Server Error`: Server-side errors

## License

This project is open source and available under the [MIT License](LICENSE). 