const mongoose = require('mongoose');

// Define employee schema using Mongoose
const employeeSchema = new mongoose.Schema({
  // Define schema fields
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  email: { type: String, maxLength: 100, unique: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Empty"],
    maxLength: 50
  },
  salary: { type: Number, required: true },
});

// Create Employee model using the defined schema
module.exports = mongoose.model("Employee", employeeSchema);
