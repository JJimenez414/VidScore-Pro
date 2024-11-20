import Upload from "./Upload.jsx";
import Video from "./Video.jsx";
import Request from "./APIRequest"
import { useEffect, useState } from 'react';

function UploadConatiner(props) {

  
  const [File, setFile] = useState(); 
    
  // function to get the video file from FileDrop.jsx
  function getFile(getFile) {
      setFile(getFile);

  }

  // when the file gets uploaded, we call the function postVideoFunc that send the file to the back end.
  useEffect(() => {
      let isMounted = true;

      const postVideoFunc = async () => {
          try {
              const result = await Request.postVideo(File, "video.mp4");
              // this function will be used on App.jsx and Score.jsx inorder to start the loading animation.
              if (isMounted && result) {
                  props.doesFileExists(true);
              }
          } finally {
              console.log("finally");
          }
      }

      if (File) {
          postVideoFunc();
      }
      
  }, [File])


  return (
      <div className="">
        {/* if file exists, aka the user uploaded a file, display the video else display the drop box container */}
            {File ? <Video videoId={File} videoFile={File}/> : <Upload getFile={getFile}/>}
        </div>
  )
}

export default UploadConatiner