# Restaurant Website

This is a full-stack web application for a restaurant website, built using React.js for the frontend and Node.js with Express.js for the backend.

## Installation

Install my-project with npm

1. ### Clone the repository
```bash
  git clone https://github.com/himanshu01010/FoodHub.git
```
2. ### Navigate to the project directory
```bash
  cd FoodHub
```
3. ### Install frontend dependencies
```bash
cd frontend
```
and
```bash
npm install
```
4. ### Install backend dependencies
```bash
cd backend
```
and
```bash
npm install
```
5. ### Run the both server
```bash
npm run dev
```
6. Create a `.env` file in the `backend` directory and add your MongoDB connection string: `MONGODB_URI=your_mongodb_connection_string`
    
## Project Structure
frontend/: Contains all frontend-related files and folders.
- public/: Contains the public assets and the HTML template file.
- src/: Contains the source code for the frontend application.
  - assets/: Contains static assets such as images.
  - components/: Contains reusable React components.
  - pages/: Contains React components representing different pages/routes of the application.
  - services/: Contains services for interacting with backend APIs or performing other tasks.
  - App.js: Main component where routing and layout are defined.
  - index.js: Entry point of the frontend application.
  - package.json: Configuration file for frontend dependencies.
  - .env: Environment variables for the frontend (e.g., API base URL).

backend/: Contains all backend-related files and folders.
- controllers/: Contains controllers to handle business logic.
- models/: Contains database models.
- routes/: Contains route definitions.
- middleware/: Contains middleware functions.
- config/: Contains configuration files (e.g., database configuration).
- server.js: Entry point of the backend application.
- package.json: Configuration file for backend dependencies.

## Features
- Responsive design for different screen sizes
- Navigation menu
- Home section with appealing visuals
- Reservation system (backend functionality)

### Prerequisites

- Node.js (v14.x or higher)
- npm (Node Package Manager)
- MongoDB (installed and running)
