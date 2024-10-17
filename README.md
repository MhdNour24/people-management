https://github.com/user-attachments/assets/1c92d348-89d4-47ca-ab4d-d7a7c061a031


# People Management Application

This application allows users to manage a list of people, providing functionality to add, edit, and delete people. It features a React-based , Redux Toolkit and Tailwind front-end and a Node.js/Express back-end with MongoDB for data storage.

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (for the database)

## Setup

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone [https://github.com/YourUsername/YourRepositoryName.git](https://github.com/MhdNour24/people-management.git)

3. Install dependencies
You'll need to install dependencies for both the front-end and back-end.

Navigate to the back-end folder and install dependencies:

cd backend
npm install

Navigate to the front-end folder and install dependencies:

cd ../frontend
npm install

4. Set up environment variables
In the backend folder, create a .env file to store environment variables required for the server, such as database connection details.

Example .env file:

MONGO_URI=mongodb://localhost:27017/peopleDB
PORT=5000
