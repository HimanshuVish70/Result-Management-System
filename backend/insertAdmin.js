const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

// Function to insert sample admin data
const insertAdmin = async () => {
  try {
    // Sample admin data
    const sampleAdmin = {
      username: 'admin',
      password: 'admin123',  // This will be hashed before saving
    };

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: sampleAdmin.username });
    
    if (!existingAdmin) {
      // Insert sample admin if it doesn't exist
      const newAdmin = new Admin(sampleAdmin);
      await newAdmin.save();
      console.log('Sample admin inserted successfully!');
    } else {
      console.log(`Admin with username "${sampleAdmin.username}" already exists.`);
    }
  } catch (error) {
    console.error('Error inserting sample admin:', error);
  }
};

module.exports = insertAdmin;
