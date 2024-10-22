import React, { useState } from 'react';
import FileUpload from '../../components/Admin/FileUpload';
import AdminNavbar from '../../components/Admin/AdminNavbar';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('attendanceMarks');

  return (
    <div>
      <AdminNavbar />
      <h2>Admin Dashboard</h2>
      <select onChange={(e) => setSelectedTab(e.target.value)} value={selectedTab}>
        <option value="attendanceMarks">Attendance Marks</option>
        <option value="projectReviewMarks">Project Review Marks</option>
        <option value="assessmentMarks">Assessment Marks</option>
        <option value="projectSubmissionMarks">Project Submission Marks</option>
        <option value="linkedinPostMarks">LinkedIn Post Marks</option>
      </select>
      
      <FileUpload endpoint={selectedTab} />
    </div>
  );
};

export default AdminDashboard;
