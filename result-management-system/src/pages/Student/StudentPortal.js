import React, { useState } from 'react';
import axios from 'axios';
import ResultsDisplay from '../../components/Student/ResultsDisplay';
// import './StudentPortal.css';

const StudentPortal = () => {
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState(null);

  const fetchResults = () => {
    axios.get(`/api/students/results/${studentId}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        alert('Student not found');
      });
  };

  return (
    <div className="student-portal">
      <h2>Student Portal</h2>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={fetchResults}>View Results</button>

      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default StudentPortal;
