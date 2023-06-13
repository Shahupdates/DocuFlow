import React, { useState } from 'react';

function DocumentConversionPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleConversion = () => {
    // Implement the document conversion logic using the selected file
    console.log('File:', selectedFile);
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
