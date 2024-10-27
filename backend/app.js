const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // MongoDB connection
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const insertData = require('./insertData');  // Import insertData function
const insertAdmin = require('./insertAdmin'); // Import insertAdmin function
const Student = require('./models/Student');  // Import Student model here

dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB(); 

// Middleware
  
const corsOptions = {
    origin: 'http://localhost:3000',  // Frontend URL
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);

// Global Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Function to start the server and insert sample data
const startServer = async () => {
    try { 
        await insertData(); // Insert sample student data
        await insertAdmin(); // Insert sample admin data

        // Sample student data (replace with actual data)
        const students = [
            { studentId: "S001", name: "John Doe", attendanceMarks: 85, projectReviewMarks: 90, assessmentMarks: 88, projectSubmissionMarks: 92, linkedinPostMarks: 80 },
            // Add more students here as needed
        ];

        // Upsert students
        for (let student of students) {
            await Student.updateOne(
                { studentId: student.studentId },  // Query
                student,  // Data
                { upsert: true }  // Upsert option
            );
            console.log(`Student ${student.studentId} upserted successfully.`);
        }

        console.log('Sample data inserted/updated successfully!');
    } catch (err) {
        console.error('Error inserting sample data or admin:', err.message);
    }
};

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    startServer();
});
