const mongoose = require('mongoose');
const Student = require('./models/Student');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  
  // Sample student data
  const sampleStudents = [
    { studentId: "S001", name: "Anubhav Srivastava", attendanceMarks: 85, projectReviewMarks: 90, assessmentMarks: 88, projectSubmissionMarks: 92, linkedinPostMarks: 80 },
    { studentId: "S002", name: "Himanshu Kumar Vishwakarma", attendanceMarks: 78, projectReviewMarks: 85, assessmentMarks: 90, projectSubmissionMarks: 95, linkedinPostMarks: 75 },
    { studentId: "S003", name: "Meraj Alam", attendanceMarks: 92, projectReviewMarks: 80, assessmentMarks: 85, projectSubmissionMarks: 90, linkedinPostMarks: 88 },
    { studentId: "S004", name: "Ankit Yadav", attendanceMarks: 80, projectReviewMarks: 75, assessmentMarks: 82, projectSubmissionMarks: 85, linkedinPostMarks: 79 },
    { studentId: "S005", name: "Sakshi Rai", attendanceMarks: 95, projectReviewMarks: 93, assessmentMarks: 91, projectSubmissionMarks: 94, linkedinPostMarks: 90 },
    { studentId: "S006", name: "Rahul Sharma", attendanceMarks: 88, projectReviewMarks: 85, assessmentMarks: 90, projectSubmissionMarks: 92, linkedinPostMarks: 83 },
    { studentId: "S007", name: "Shubham Singh", attendanceMarks: 82, projectReviewMarks: 78, assessmentMarks: 85, projectSubmissionMarks: 88, linkedinPostMarks: 81 },
    { studentId: "S008", name: "Priya Gupta", attendanceMarks: 90, projectReviewMarks: 88, assessmentMarks: 92, projectSubmissionMarks: 95, linkedinPostMarks: 87 },
    { studentId: "S009", name: "Amit Kumar", attendanceMarks: 85, projectReviewMarks: 80, assessmentMarks: 87, projectSubmissionMarks: 90, linkedinPostMarks: 82 },
    { studentId: "S010", name: "Rajesh Patel", attendanceMarks: 78, projectReviewMarks: 75, assessmentMarks: 80, projectSubmissionMarks: 83, linkedinPostMarks: 77 },
  ];

  // Insert sample data into the database
  Student.insertMany(sampleStudents)
    .then(() => {
      console.log('Sample data inserted successfully!');
      mongoose.connection.close();  // Close connection after insertion
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      mongoose.connection.close();  // Close connection even if there’s an error
    });

}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
