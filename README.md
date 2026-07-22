# 🎉 Event Management System

A full-stack Event Management System built using **Spring Boot**, **React**, and **SQLite**. The system allows users to register, verify their accounts using OTP, log in securely with JWT authentication, browse events, and purchase tickets. Administrators can create and manage events.

---

## Features

### User Features

- User Registration
- OTP Verification
- Secure Login (JWT Authentication)
- Browse Events
- View Event Details
- Purchase Tickets
- Dashboard
- Logout

for future Updates
### Admin Features

- Login
- Create Events
- Edit Events
- Delete Events
- View Ticket Sales

---

# Technologies Used

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- SQLite
- Maven
- Lombok

## Frontend

- React
- React Router
- Axios
- Tailwind CSS
- Vite

---

# Project Structure

```
event-management-system
│
├── event-management-backend
│
└── event-management-frontend
```

---

# Backend Setup

## Navigate to backend

```bash
cd event-management-backend
```

## Run the backend

Windows

```bash
.\mvnw.cmd spring-boot:run
```

Linux/Mac

```bash
./mvnw spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

# Frontend Setup

Navigate to frontend

```bash
cd event-management-frontend
```

Install dependencies

```bash
npm install
```

Start React

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Register

```
POST /api/auth/register
```

## Verify OTP

```
POST /api/auth/verify-otp
```

## Login

```
POST /api/auth/login
```

---

# Authentication

The application uses JWT authentication.

After login, the backend returns a JWT token.
Example

Authorization: Bearer YOUR_JWT_TOKEN
Protected endpoints require this token.
---------------------------------------

# Database

Database used
SQLite
------------------------
Database file
event-management.db
-----------------------

Hibernate automatically creates and updates tables.



# Future Improvements

- Online Payments
- Email Notifications
- QR Code Tickets
- Seat Reservation
- Event Categories
- Event Search
- Reports
- Analytics
- Admin Dashboard

---

# Authors

**Ntsako Muchavi**


---

# License

This project was developed for educational purposes.