
import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Uploadvideopage() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileFormatError, setFileFormatError] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {

      const videodatatype = file.name.split(".")[1].toLowerCase();
      // Check the file format (e.g., allow only image files)
      const allowedFormats = ["mp4"];
      if (allowedFormats.includes(videodatatype)) {
        setSelectedFile(file);
        setFileFormatError(false);
      }
      else {
        setSelectedFile(null);
        setFileFormatError(true);
      }
    }
  };


  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        // Upload the file content to the backend
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('http://localhost:4000/fileupload', formData);
        console.log('File uploaded successfully');

        if (response.data !== null) {
          
          navigate('/Analysis'); 
        } else {
          console.log('Response is null');
        }


      } catch (err) {
        console.log("there is some error to post video in backend ", err);
      }

    }
    else {
      console.log("first choose a file")
    }
  };


  return (


    <div className="flex flex-col justify-center items-center" >

      <h1 className="text-4xl font-bold mt-[190px]" >Upload Video</h1>
      <div className="flex flex-col w-[40vw] h-[25vh] mt-[20px] border-6 rounded-md p-10 justify-center items-center bg-violet-400">


        <div className='absolute'>
          <input type="file" onChange={handleFileChange} />
          {fileFormatError && <p style={{ color: 'red' }}>Invalid file format. Please choose a mp_4 video file.</p>}
          <button onClick={handleFileUpload} className="bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">Upload File</button>
        </div>
      </div>

    </div>

  )
}

export default Uploadvideopage