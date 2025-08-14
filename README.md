# Bug Feature Tracker

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

## 🖥️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT
- **Validation**: Custom + middleware-based

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

## 📂 Project Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd bug-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bug_tracker
DB_USER=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

### 4. Database Setup
```bash
# Run migrations
npx sequelize-cli db:migrate

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

---

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Tickets
- `GET /api/tickets` - Get all tickets (with filters)
- `POST /api/tickets` - Create new ticket
- `GET /api/tickets/:id` - Get ticket by ID
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket

### Comments
- `GET /api/tickets/:id/comments` - Get ticket comments
- `POST /api/tickets/:id/comments` - Add comment to ticket

---

## 🔧 Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run migrate    # Run database migrations
npm run seed       # Run database seeders
```

---

## 👥 User Roles & Permissions

### Admin
- Full system access
- Manage users, projects, and tickets
- System configuration

### Developer
- View and update assigned tickets
- Comment on tickets
- Create new tickets

### Reporter
- Create and view tickets
- Comment on own tickets
- Limited project access

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For any questions or support, please reach out through the project repository.
