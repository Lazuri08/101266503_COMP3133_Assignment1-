COMP3133 Assignment 1
This is the repository for COMP3133 Assignment 1. It contains a GraphQL API for managing employees and users.

Installation
To install the project dependencies, run:

npm install
Make sure you have MongoDB installed and running on your local machine or provide the appropriate connection URI in the .env file.

Usage
To start the server, run:

sql
npm start
This will start the Apollo Server and connect to the MongoDB database.

Once the server is running, you can access the GraphQL playground at http://localhost:4000/graphql to interact with the API.

Dependencies
The project relies on the following dependencies:

apollo-server: Used for creating the GraphQL server.
mongoose: MongoDB object modeling for Node.js.
bcryptjs: Library for hashing passwords.
validator: Library for validating and sanitizing strings.
Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

