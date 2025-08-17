# Bug Feature Tracker

A complete bug and feature tracking platform built with Node.js, Express, Sequelize, and PostgreSQL. Designed with a scalable service-based architecture to manage software development issues, projects, and developer collaboration.

## 🌐 Live Demo
**Deployed API**: [https://bug-feature-tracker.onrender.com/](https://bug-feature-tracker.onrender.com/)

## 🚀 Features
* 🧑‍💼 **User Roles**: Admin, Developer, Reporter
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

## 🖥️ Tech Stack
* **Backend**: Node.js, Express.js
* **Database**: PostgreSQL (Supabase)
* **ORM**: Sequelize
* **Authentication**: JWT
* **Deployment**: Render
* **Validation**: Custom + middleware-based

## 🧪 Testing the API

### Quick Test with Postman/Thunder Client

**Base URL**: `https://bug-feature-tracker.onrender.com`

### Step 1: Register a New User
```http
POST /register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "developer"
}
```

### Step 2: Login to Get JWT Token
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```
**Response**: Copy the `token` from the response for subsequent requests.

### Step 3: Create a Project (Protected Route)
```http
POST /projects
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "name": "Test Project",
  "description": "Sample project for testing",
  "status": "active"
}
```

### Step 4: Create a Ticket
```http
POST /tickets
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "title": "Sample Bug Report",
  "description": "This is a test bug report",
  "type": "bug",
  "priority": "high",
  "status": "open",
  "projectId": 1
}
```

### Step 5: Get All Projects/Tickets
```http
GET /projects
Authorization: Bearer YOUR_JWT_TOKEN

GET /tickets
Authorization: Bearer YOUR_JWT_TOKEN
```

## 📋 Complete API Endpoints

### Authentication (Public)
* `POST /register` - User registration
* `POST /login` - User login

### Projects (Protected)
* `GET /projects` - Get all projects
* `POST /projects` - Create new project
* `GET /projects/:id` - Get project by ID
* `PUT /projects/:id` - Update project
* `DELETE /projects/:id` - Delete project

### Tickets (Protected)
* `GET /tickets` - Get all tickets (with filters)
* `POST /tickets` - Create new ticket
* `GET /tickets/:id` - Get ticket by ID
* `PUT /tickets/:id` - Update ticket
* `DELETE /tickets/:id` - Delete ticket

### Comments (Protected)
* `GET /tickets/:id/comments` - Get ticket comments
* `POST /tickets/:id/comments` - Add comment to ticket

### Users (Admin Only)
* `GET /users` - View all users

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

## 📂 Local Development Setup

### Prerequisites
* Node.js (v14 or higher)
* PostgreSQL
* npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Parvezkhan0/bug-feature-tracker.git
cd bug-feature-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
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
```

### 4. Database Setup
```bash
# Run migrations
npm run migrate

# Run seeders (optional)
npx sequelize-cli db:seed:all
```

### 5. Start the application
```bash
# Development
npm run dev

# Production
npm start
```

## 🔧 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run migrate    # Run database migrations
```

## 👥 User Roles & Permissions

### Admin
* Full system access
* Manage users, projects, and tickets
* View all users

### Developer
* View and update assigned tickets
* Comment on tickets
* Create new tickets

### Reporter
* Create and view tickets
* Comment on own tickets
* Limited project access

## 🔒 Authentication Flow

1. Register a new user with `/register`
2. Login with `/login` to receive a JWT token
3. Include the token in the `Authorization: Bearer <token>` header for protected routes
4. Token expires based on `JWT_EXPIRES_IN` configuration

## 🚀 Deployment

This application is deployed on **Render** with:
- Automatic deployments from GitHub
- PostgreSQL database hosted on **Supabase**
- Environment variables configured for production
- Database migrations run automatically on deployment

---

**Developer**: Parvez Khan  
**GitHub**: [https://github.com/Parvezkhan0](https://github.com/Parvezkhan0)  
**Live Demo**: [https://bug-feature-tracker.onrender.com/](https://bug-feature-tracker.onrender.com/)
