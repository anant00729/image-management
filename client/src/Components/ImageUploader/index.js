import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ExifReader from 'exifreader';

function ImageUploader({ onImageInfoReceived }) {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0]; // Assuming only one file is selected
    if (file) {
      getGPSFromImage(file);
    }
  };

  const getGPSFromImage = async (file) => {
    try {
      let imageInfo = await ExifReader.load(file);
      delete imageInfo['GPSProcessingMethod']
      delete imageInfo['Thumbnail']
      // Pass file and imageInfo to the parent component
      onImageInfoReceived(file, imageInfo);
    } catch (error) {
      console.error('Error loading image info:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <img src={file} style={{width: '500px', height: '500px'}}/>
    </div>
  );
}

// Declare PropTypes for onImageInfoReceived
ImageUploader.propTypes = {
  onImageInfoReceived: PropTypes.func.isRequired,
};

export default ImageUploader;
