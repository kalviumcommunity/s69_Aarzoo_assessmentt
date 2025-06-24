# MERN Backend

This is the backend API for the MERN stack application built with Node.js, Express.js, and MongoDB.

## Features

- **Authentication**: JWT-based authentication with bcrypt password hashing
- **User Management**: User registration, login, and profile management
- **Assessments**: Skill assessment creation and management
- **Courses**: Educational course management with enrollment
- **Skills**: User skill tracking and analysis
- **Resume Builder**: Comprehensive resume creation and management

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Assessments
- `GET /api/assessments` - Get all assessments
- `GET /api/assessments/:id` - Get assessment by ID
- `POST /api/assessments` - Create assessment (admin only)
- `PUT /api/assessments/:id` - Update assessment (admin only)
- `DELETE /api/assessments/:id` - Delete assessment (admin only)

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)
- `POST /api/courses/:id/enroll` - Enroll in course

### Skills
- `GET /api/skills` - Get user skills
- `POST /api/skills` - Add skill
- `PUT /api/skills/:skillId` - Update skill
- `DELETE /api/skills/:skillId` - Delete skill
- `GET /api/skills/analysis` - Get skill analysis

### Resume
- `GET /api/resume` - Get user's resume
- `PUT /api/resume` - Update resume
- `POST /api/resume/education` - Add education
- `PUT /api/resume/education/:id` - Update education
- `DELETE /api/resume/education/:id` - Delete education
- `POST /api/resume/experience` - Add experience
- `PUT /api/resume/experience/:id` - Update experience
- `DELETE /api/resume/experience/:id` - Delete experience
- `POST /api/resume/projects` - Add project
- `PUT /api/resume/projects/:id` - Update project
- `DELETE /api/resume/projects/:id` - Delete project

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `config.env` file in the root directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-app
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

3. **Start MongoDB**:
   Make sure MongoDB is running on your system.

4. **Run the server**:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Database Models

### User
- Basic user information (name, email, password)
- Profile details (avatar, bio, location, etc.)
- Skills array with levels and categories
- References to assessments, courses, and resume

### Assessment
- Assessment details (title, description, category)
- Questions with multiple choice options
- Time limits and passing scores
- Created by admin users

### Course
- Course information (title, description, category)
- Modules with content and resources
- Instructor details
- Enrollment tracking
- Rating system

### Resume
- Personal information
- Education history
- Work experience
- Skills and projects
- Certifications and languages
- Template selection

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Role-based authorization
- Input validation with express-validator
- CORS enabled for frontend integration

## Development

The server runs on port 5000 by default. Make sure to update the frontend API base URL to match this port. 