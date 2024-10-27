import React, { useState } from 'react';
import axios from 'axios';
import './StudentPortal.css';

const StudentPortal = () => {
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const response = await axios.get(`http://localhost:5000/api/students/results/${studentId}`);
      if (response.data) {
        setResults(response.data);
      } else {
        setError('No results found for the provided student ID.');
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Student ID not found. Please check and try again.');
      } else {
        setError('Failed to fetch results. Please try again later.');
      }
      console.error('Error fetching results:', err);
    }
  };

  return (
    <div className="student-portal">
      <h2>Student Portal</h2>
      <input
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter your student ID"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}
      {results && (
        <div className="results-container">
          <h3>Results</h3>
          <ul>
            <li><strong>Student Name:</strong> {results.name}</li>
            <li><strong>Attendance Marks:</strong> {results.attendanceMarks}</li>
            <li><strong>Project Review Marks:</strong> {results.projectReviewMarks}</li>
            <li><strong>Assessment Marks:</strong> {results.assessmentMarks}</li>
            <li><strong>Project Submission Marks:</strong> {results.projectSubmissionMarks}</li>
            <li><strong>LinkedIn Post Marks:</strong> {results.linkedinPostMarks}</li>
            <li><strong>Total Marks:</strong> {results.totalMarks}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentPortal;
