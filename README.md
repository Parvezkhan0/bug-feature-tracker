# Bug & Feature Tracking System

A complete bug and feature tracking platform built with Node.js, Express, Sequelize, and PostgreSQL. Designed with a scalable service-based architecture to manage software development issues, projects, and developer collaboration.

---

## 🚀 Features

- 🧑‍💼 **User Roles**: Admin, Developer, Reporter
- 🔐 **Authentication**: JWT-based login/signup
- 👥 **RBAC**: Role-based access control
- 🗂 **Projects**: Create, update, delete, list projects
- 🎫 **Tickets**:
  - Create, assign, and track bugs/features
  - Filter by project, status, priority, assigned user
  - Full-text search on title and description
- 💬 **Comments**: Add comments to tickets
- 📊 **Dashboard-ready**: Stats can be added later
- 🧱 **Modular Structure**: Separation of concerns using services, controllers, models, and middlewares

---

## 📁 Project Structure
bug-tracker/
├── config/ # DB config and env setup
├── controllers/ # Handle req/res
├── middlewares/ # Auth, roles, error handling
├── migrations/ # Sequelize migration files
├── models/ # Sequelize models
├── routes/ # All API routes
├── services/ # Business logic lives here
├── utils/ # Helpers and utilities
├── app.js # Express app setup
└── index.js # App entry point

**Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Validation**: Custom + middleware-based
- **Deployment**: (You can add your deployment method here)
