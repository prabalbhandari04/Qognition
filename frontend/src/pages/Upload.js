import React, {useState} from 'react';
import axios from '../utils/api';

function Upload () {
  const [uploadedFile, setUploadedFile] = useState ('');
  const [fileTitle, setFileTitle] = useState ('');

  function handleFormSubmittion (e) {
    e.preventDefault ();

    let form = document.getElementById ('form');
    let formData = new FormData (form);

    // new line added
    axios.post ('/file', formData);
  }

  function handleFileTitle (e) {
    setFileTitle (e.target.value);
  }

  function handleUploadedFile (e) {
    setUploadedFile (e.target.value);
  }

  return (
    <React.Fragment>
      <h1>File upload</h1>
      <form
        encType="multipart/form-data"
        onSubmit={handleFormSubmittion}
        id="form"
      >
        <input
          type="file"
          name="uploadedFile"
          value={uploadedFile}
          onChange={handleUploadedFile}
          required
        />
        <br />
        <br />

        <label>File title:</label><br />
        <input
          type="text"
          placeholder="Enter file title"
          name="fileTitle"
          value={fileTitle}
          onChange={handleFileTitle}
          required
        />
        <br />
        <br />

        <button type="submit">Submit Form</button>
      </form>
    </React.Fragment>
  );
}

export default Upload;