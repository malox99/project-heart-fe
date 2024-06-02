import React, { useState } from 'react';
import axios from 'axios';


const TestToDelete = () => {
  const url = "http://194.164.164.192:8090/api/v1/locations/uploadPhotoToLocation"
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [locationId, setLocationId] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleLocationIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    //test

    if (!selectedFile || !locationId) {
      alert('Please select a file and enter a location ID.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('locationId', locationId);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Select a file:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="locationId">Location ID:</label>
          <input type="text" id="locationId" value={locationId} onChange={handleLocationIdChange} />
        </div>
        <button type="submit">Upload</button>
      </form>

      <img src=''/>
    </div>
  );
};

export default TestToDelete;
