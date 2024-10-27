const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./models/Student'); // Import the Student model

dotenv.config();

// Function to insert sample student data
const insertData = async () => {
  try {
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

    // Check for duplicates and insert sample data into the database
    for (const student of sampleStudents) {
      const existingStudent = await Student.findOne({ studentId: student.studentId });
      if (!existingStudent) {
        await Student.create(student);
        console.log(`Inserted student: ${student.name}`);
      } else {
        console.log(`Student with ID ${student.studentId} already exists.`);
      }
    }

    console.log('Sample student data processed successfully!');
  } catch (error) {
    console.error('Error inserting sample student data:', error);
  }
};

module.exports = insertData; // Export the function
