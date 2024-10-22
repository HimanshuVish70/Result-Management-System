import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Loader from '../Common/Loader';

const FileUpload = ({ endpoint }) => {
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    setLoading(true);
    axios.post(`/api/students/upload/${endpoint}`, formData, {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    })
      .then((response) => {
        alert(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        alert('Error: ' + error.message);
        setLoading(false);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button>Upload Excel File</button>
      </div>

      {loading && <Loader />}
    </div>
  );
};

export default FileUpload;
