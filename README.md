# Todo app client side

Server-side component of a Todo list application built with the MERN stack (MongoDB/Express/React/Node). This server handles data storage and retrieval for the Todo app.

## How to start

1. Clone the Repository

```bash
git clone https://github.com/da6ko/to-do-app-server.git
cd to-do-app-server
```

2. Install Dependencies

```bash
  npm install
```

This command installs the necessary dependencies for the server-side application.

3. Configure MongoDB Atlas
Configure your MongoDB Atlas connection in the server-side code. Replace the connection string in server.js with your actual MongoDB Atlas connection string.

4. Start the Server

```bash
  npm start
```

This command starts the server. The server will be running at http://localhost:8080 by default.

## Features

- Fetch Todos: Retrieve the list of todos from the database.
- Add Todo: Add a new todo to the database.
- Edit Todo: Update an existing todo in the database.
- Remove Todo: Delete a todo from the database.

## Technologies Used

- MongoDB: Database for storing todos.
- Express: Backend framework for handling server-side logic.
- Node.js: JavaScript runtime for server-side development.

## API Endpoints
- GET /getTodos: Retrieve all todos from the database.
- POST /addTodo: Add a new todo to the database.
- PUT /editTodo/:id: Update an existing todo in the database.
- DELETE /removeTodo/:id: Delete a todo from the database.




