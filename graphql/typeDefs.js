const { gql } = require('apollo-server');

// Define GraphQL schema using gql template literal
module.exports = gql`
  # User type representing user data
  type User {
    username: String!
    email: String!
    password: String!
  }

  # Input type for creating a new user
  input UserInput {
    username: String
    email: String
    password: String
  }

  # Employee type representing employee data
  type Employee {
    _id: String
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Int
  }

  # Query type for defining queries
  type Query {
    # Query to authenticate user login
    login(
      username: String
      password: String
    ): Boolean

    # Query to fetch all employees
    getAllEmployees: [Employee]

    # Query to fetch an employee by ID
    getEmployee(
      _id: String!
    ): Employee
  }

  # Mutation type for defining mutations
  type Mutation {
    # Mutation to register a new user
    signup(
      username: String
      email: String
      password: String
    ): User

    # Mutation to add a new employee
    addEmployee(
      first_name: String
      last_name: String
      email: String
      gender: String
      salary: Int
    ): Employee

    # Mutation to update employee details
    updateEmployee(
      _id: String!
      first_name: String
      last_name: String
      email: String
      gender: String
      salary: Int
    ): Boolean

    # Mutation to delete an employee by ID
    deleteEmployee(
      _id: String!
    ): Boolean
  }
`;
