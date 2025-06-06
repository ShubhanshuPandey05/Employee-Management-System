# Employee Management System

A full-stack web application for managing employee data, including CRUD operations, with a modern React frontend and Node.js backend.

## Features

- Add, view, update, and delete employee records  
- Responsive React.js frontend with Material-UI components  
- RESTful API built with Express.js  
- MongoDB database for storing employee data  
- Form validation and error handling  

## Prerequisites

- Node.js (v14 or higher)  
- MongoDB  
- npm or yarn  

## Setup Instructions

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ShubhanshuPandey05/Employee-Management-System.git
   cd Employee-Management-System/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/employees` – Get all employees  
- `GET /api/employees/:id` – Get employee by ID  
- `POST /api/employees` – Add new employee  
- `PUT /api/employees/:id` – Update employee data  
- `DELETE /api/employees/:id` – Delete employee  

## Usage

- Use the frontend UI to manage employees easily.  
- All changes sync with the backend MongoDB database.

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

## License

This project is licensed under the MIT License.
