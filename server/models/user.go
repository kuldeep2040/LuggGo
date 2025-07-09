package models

type User struct {
	ID           string  `json:"id"`
	FullName     string  `json:"full_name"`
	Phone        string  `json:"phone,omitempty"`
	ProfileImage string  `json:"profile_image,omitempty"`
	Role         string  `json:"role"` // traveler / host / admin
	City         string  `json:"city,omitempty"`
	Country      string  `json:"country,omitempty"`
	TotalBookings int     `json:"total_bookings"`
	TotalSpent    float64 `json:"total_spent"`
	CreatedAt     string  `json:"created_at"`
}
