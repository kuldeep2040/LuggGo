package models

type User struct {
	ID        string `json:"id" bson:"_id,omitempty"`
	FullName  string `json:"full_name" bson:"full_name"`
	Phone     string `json:"phone,omitempty" bson:"phone,omitempty"`
	Email     string `json:"email" bson:"email"`
	Password  string `json:"password" bson:"password"`
	CreatedAt string `json:"created_at" bson:"created_at"`
}
