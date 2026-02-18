# 🎫 Support Ticket System - Backend

- A role-based Support Ticket System built using Node.js, Express, MongoDB, and JWT Authentication.

- This backend allows users to create and manage support tickets with proper role-based access (User & Admin).

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Role-Based Access Control
- REST APIs
- Postman (API Testing & Documentation)

---

## 📁 Folder Structure

src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 └── app.js
server.js
.env

---

## 🔐 Authentication

### POST /api/auth/signup
Create a new user. 

### POST /api/auth/login
Login user and return JWT token.

---

## 🎫 Tickets API

### POST /api/tickets
Create a ticket (Authenticated User)

### GET /api/tickets
- User → See only their tickets
- Admin → See all tickets
- Supports pagination & search

Query Params:
- page
- limit
- search (by title)
- status

### PATCH /api/tickets/:id
- Update status
- Admin can assign ticket
- Status transition validation applied

---

## 🔄 Status Flow Logic

Valid transitions:

Open → In Progress  
In Progress → Resolved  
Resolved → Closed  

Invalid transitions return `400 Bad Request`.

---

## 💬 Comments API

### POST /api/tickets/:id/comments
Add comment to a ticket

### GET /api/tickets/:id/comments
Get all comments for a ticket

---

## 👥 Role-Based Access

- User:
  - Create ticket
  - View own tickets
  - Add comments

- Admin:
  - View all tickets
  - Assign tickets
  - Update ticket status

---

## ⚙️ Environment Variables

Create a `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## ▶️ Run Locally

```bash
npm install
npm start


Server runs at: http://localhost:5000

---

📬 API Documentation

All endpoints have been fully tested using Postman. 
(Contains all request bodies, headers, authentication, and response examples.)


🧪 Tested Endpoints

✔ Authentication (Signup/Login)
✔ Ticket CRUD
✔ Status transitions validation
✔ Role restrictions
✔ Comments APIs
✔ Pagination & Search

---

📌 Features Implemented

✔ JWT Authentication
✔ Role-Based Authorization
✔ Ticket Management
✔ Status Transition Validation
✔ Pagination & Search
✔ Comments System
✔ Clean Folder Structure
✔ Centralized Error Handling