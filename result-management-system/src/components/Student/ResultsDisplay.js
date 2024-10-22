import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div>
      <h3>Results for {results.studentId}</h3>
      <p>Attendance Marks: {results.attendanceMarks}</p>
      <p>Project Review Marks: {results.projectReviewMarks}</p>
      <p>Assessment Marks: {results.assessmentMarks}</p>
      <p>Project Submission Marks: {results.projectSubmissionMarks}</p>
      <p>LinkedIn Post Marks: {results.linkedinPostMarks}</p>
      <p>Total Marks: {results.totalMarks}</p>
    </div>
  );
};

export default ResultsDisplay;
