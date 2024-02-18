// Import necessary models
const Employee = require('../models/employeeModel');
const User = require('../models/userModel');

// Export resolvers object
module.exports = {
    Query: {
        // Resolver for user login
        async login(_, { username, password }) {
            // Find the user by username
            const user = await User.findOne({ username });
            // If user does not exist, throw an error
            if (!user) {
                throw new Error('User not found');
            }
            // Compare the provided password with the user's password
            const isValid = await user.comparePassword(password);
            // Return whether the password is valid or not
            return isValid;
        },
        // Resolver to fetch all employees
        async getAllEmployees() {
            // Find and return all employees
            return await Employee.find();
        },
        // Resolver to fetch an employee by ID
        async getEmployee(_, { _id }) {
            // Find and return the employee with the specified ID
            return await Employee.findById(_id);
        },
    },
    Mutation: {
        // Resolver to signup a new user
        async signup(_, { username, email, password }) {
            // Create a new user object with provided username, email, and password
            const newUser = new User({
                username,
                email,
                password
            });

            // Save the new user to the database
            const res = await newUser.save();
            // Return the saved user object with its ID
            return {
                id: res.id,
                ...res._doc
            };
        },
        // Resolver to add a new employee
        async addEmployee(_, { first_name, last_name, email, gender, salary }) {
            // Create a new employee object with provided details
            const newEmployee = new Employee({
                first_name,
                last_name,
                email,
                gender,
                salary
            });

            // Save the new employee to the database
            const res = await newEmployee.save();
            // Return the saved employee object with its ID
            return {
                id: res.id,
                ...res._doc
            };
        },
        // Resolver to delete an employee by ID
        async deleteEmployee(_, { _id }) {
            // Delete the employee with the specified ID
            const deletedCount = (await Employee.deleteOne({ _id })).deletedCount;
            // Return whether the employee was deleted or not
            return deletedCount > 0;
        },
        // Resolver to update an employee's details
        async updateEmployee(_, { _id, first_name, last_name, email, gender, salary }) {
            // Update the employee with the specified ID with the provided details
            const { modifiedCount } = await Employee.updateOne({ _id }, {
                first_name,
                last_name,
                email,
                gender,
                salary
            });
            // Return whether the employee was updated or not
            return modifiedCount > 0;
        }
    }
};
