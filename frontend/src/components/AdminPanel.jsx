// AdminPanel.js
import React from 'react';
import FileUpload from './FileUpload';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h2><br />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Attendance Marks</h3><br />
        <FileUpload url="/api/students/upload/attendance" />
        {/* Repeat for other categories as needed */}
      </div>
    </div>
  );
};

export default AdminPanel;
