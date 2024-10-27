// FileUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = ({ url }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    
    acceptedFiles.forEach((file) => {
      formData.append('file', file);
      console.log('Selected file:', file); // Log each file
    });

    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type
      },
    })
      .then((response) => {
        console.log('File uploaded successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error uploading file:', error.response ? error.response.data : error.message);
      });
  }, [url]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload-container">
      <input {...getInputProps()} />
      <p className="file-upload-text">
        Drag & drop your Attendance Excel Sheet here, or <span className="file-upload-highlight">click to select files</span>
      </p>
    </div>
  );
};

export default FileUpload;
