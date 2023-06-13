import React, { useState } from 'react';

function DocumentConversionPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleConversion = () => {
    if (selectedFile) {
      // Implement the document conversion logic here
      console.log('Converting file:', selectedFile);
    } else {
      alert('Please select a file.');
    }
  };

  return (
    <div>
      <h1>Document Conversion Page</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleConversion}>Convert Document</button>
    </div>
  );
}

export default DocumentConversionPage;
