# Bug Feature Tracker

A complete bug and feature tracking platform built with Node.js, Express, Sequelize, and PostgreSQL. Designed with a scalable service-based architecture to manage software development issues, projects, and developer collaboration.

## 🌐 Live Demo
**Deployed API:** https://bug-feature-tracker.onrender.com/

---

## 🚀 Features

* 🧑‍💼 **User Roles**: Admin, Manager, User
* 🔐 **Authentication**: JWT-based login/signup
* 👥 **RBAC**: Role-based access control
* 🗂 **Projects**: Create, update, delete, list projects
* 🎫 **Tickets**:
   * Create, assign, and track bugs/features
   * Filter by project, status, priority, assigned user
   * Full-text search on title and description
* 💬 **Comments**: Add comments to tickets
* 📊 **Dashboard-ready**: Stats can be added later
* 🧱 **Modular Structure**: Separation of concerns using services, controllers, models, and middlewares

---

## 🖥️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: PostgreSQL (Supabase)
* **ORM**: Sequelize
* **Authentication**: JWT
* **Deployment**: Render
* **Validation**: Custom + middleware-based

---

## 🧪 API Testing Guide

### Base URL: `https://bug-feature-tracker.onrender.com`

Follow this step-by-step guide to test all API functionality:

### **Step 1: Register a New User**
```http
POST /register
Content-Type: application/json
```
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```
**✅ Expected Response:**
```json
{
  "message": "Record Created Successfully!",
  "user": {
    "id": "uuid-here",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### **Step 2: Login to Get JWT Token**
```http
POST /login
Content-Type: application/json
```
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
**✅ Expected Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
**📋 Action Required:** Copy the `token` value for subsequent requests

### **Step 3: Create a Project (Protected Route)**
```http
POST /projects
Authorization: Bearer YOUR_JWT_TOKEN_FROM_STEP_2
Content-Type: application/json
```
```json
{
  "name": "Test Project",
  "description": "This is a test project for our bug tracker"
}
```
**📋 Action Required:** Note the `projectId` from the response for Step 5

### **Step 4: Get All Projects**
```http
GET /projects
Authorization: Bearer YOUR_JWT_TOKEN_FROM_STEP_2
```

### **Step 5: Create a Ticket**
```http
POST /tickets
Authorization: Bearer YOUR_JWT_TOKEN_FROM_STEP_2
Content-Type: application/json
```
```json
{
  "title": "Login button not working",
  "description": "The login button doesn't respond when clicked",
  "type": "bug",
  "priority": "high",
  "status": "open",
  "projectId": "PROJECT_ID_FROM_STEP_3"
}
```

### **Step 6: Get All Tickets**
```http
GET /tickets
Authorization: Bearer YOUR_JWT_TOKEN_FROM_STEP_2
```

### **Step 7: Test Admin Functionality**

**7a. Create Admin User:**
```http
POST /register
Content-Type: application/json
```
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```

**7b. Login as Admin:**
```http
POST /login
Content-Type: application/json
```
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**7c. View All Users (Admin Only):**
```http
GET /users
Authorization: Bearer ADMIN_JWT_TOKEN_FROM_7B
```

---

## 📋 Complete API Reference

### **Authentication (Public Routes)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | User registration |
| `POST` | `/login` | User login |

### **Projects (Protected Routes)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/projects` | Get all projects |
| `POST` | `/projects` | Create new project |
| `GET` | `/projects/:id` | Get project by ID |
| `PUT` | `/projects/:id` | Update project |
| `DELETE` | `/projects/:id` | Delete project |

### **Tickets (Protected Routes)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tickets` | Get all tickets (with filters) |
| `POST` | `/tickets` | Create new ticket |
| `GET` | `/tickets/:id` | Get ticket by ID |
| `PUT` | `/tickets/:id` | Update ticket |
| `DELETE` | `/tickets/:id` | Delete ticket |

### **Comments (Protected Routes)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tickets/:id/comments` | Get ticket comments |
| `POST` | `/tickets/:id/comments` | Add comment to ticket |

### **Users (Admin Only)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | View all users |

---

## 👥 User Roles & Permissions

### **Admin**
- Full system access
- Manage users, projects, and tickets
- View all users endpoint access
- System configuration

### **Manager**
- Manage assigned projects
- View and update tickets within their projects
- Comment on tickets
- Create new tickets

### **User** (Default Role)
- Create and view tickets
- Comment on tickets
- Limited project access
- Update assigned tickets

---

## 🔒 Authentication Flow

1. **Register** a new user with `/register`
2. **Login** with `/login` to receive a JWT token
3. **Include the token** in the `Authorization: Bearer <token>` header for protected routes
4. **Token expires** based on JWT_EXPIRES_IN configuration

---

## ✅ Testing Checklist

Use this checklist to verify all functionality:

- [ ] **User Registration** - Can create new users
- [ ] **User Login** - Returns valid JWT token
- [ ] **Protected Routes** - Work with valid token, fail without token
- [ ] **Role-Based Access** - Admin routes only work for admin users
- [ ] **Project CRUD** - Create, read, update, delete projects
- [ ] **Ticket CRUD** - Create, read, update, delete tickets
- [ ] **Comments** - Add and retrieve ticket comments
- [ ] **Database Relations** - Projects, tickets, users are properly linked
- [ ] **Error Handling** - Proper error messages for invalid requests

---

## 📁 Project Structure

```
bug-tracker/
├── config/           # DB config and env setup
├── controllers/      # Handle req/res
├── middlewares/      # Auth, roles, error handling
├── migrations/       # Sequelize migration files
├── models/           # Sequelize models
├── routes/           # All API routes
├── services/         # Business logic lives here
├── utils/            # Helpers and utilities
├── app.js            # Express app setup
└── index.js          # App entry point
```

---

## 📂 Local Development Setup

### **Prerequisites**
* Node.js (v14 or higher)
* PostgreSQL
* npm or yarn

### **1. Clone the repository**
```bash
git clone https://github.com/Parvezkhan0/bug-feature-tracker.git
cd bug-feature-tracker
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Environment Configuration**
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bug_tracker
DB_USER=your_username
DB_PASSWORD=your_password
DB_DIALECT=postgres
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### **4. Database Setup**
```bash
# Run migrations
npm run migrate

# Run seeders (optional)
npx sequelize-cli db:seed:all
```

### **5. Start the application**
```bash
# Development
npm run dev

# Production
npm start
```

---

## 🔧 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run migrate    # Run database migrations
```

---

## 🚀 Deployment

This application is deployed on **Render** with:

- ✅ Automatic deployments from GitHub
- ✅ PostgreSQL database hosted on Supabase
- ✅ Environment variables configured for production
- ✅ Database migrations run automatically on deployment

---

## 👨‍💻 Developer

**Parvez Khan**
- **GitHub:** https://github.com/Parvezkhan0
- **Live Demo:** https://bug-feature-tracker.onrender.com/

---

## 🎯 Quick Start Testing

**Want to test immediately? Use these exact requests:**

1. **Register:** `POST /register` with the JSON from Step 1
2. **Login:** `POST /login` with the JSON from Step 2
3. **Copy the token** and use it in all subsequent requests
4. **Test protected routes** following Steps 3-6

The API is live and ready to use! 🚀
