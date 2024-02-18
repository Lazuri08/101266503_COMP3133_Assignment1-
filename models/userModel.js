const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { isEmail } = require('validator');

// Define the salt work factor for bcrypt
const SALT_WORK_FACTOR = 10;

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  username: { primaryKey: true, type: String, maxLength: 100 },
  email: {
    type: String,
    maxLength: 100,
    unique: true,
    // Validate email format using validator library
    validate: [isEmail, 'Email is not Valid'],
  },
  password: { type: String, maxLength: 50 }
});

// Middleware to hash the password before saving to the database
userSchema.pre('save', async function(next) {
  // Check if password is modified before hashing
  if (!this.isModified('password')) return next();
  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare hashed password with candidate password
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    // Compare candidate password with hashed password
    const match = await bcrypt.compare(candidatePassword, this.password);
    return match;
  } catch (error) {
    throw error;
  }
}

// Create and export the user model
module.exports = mongoose.model("User", userSchema);
