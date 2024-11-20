import React from 'react'
import logoDrop from "/src/assets/dropbox.svg"


function Upload(props) { 

  function handleChange(event) {
    event.preventDefault();
    // checks if the user has uploaded a file, if so send the file to the DropBox.jsx class.
    if (event.target.files.length != 0) {
        props.getFile(URL.createObjectURL(event.target.files[0]));
    }   
}

  return (

    <div className='upload'>

      <label  htmlFor="input-video" id="uploadLabel"> 
        {/* when the user uploads a file, the handleChange function will be triggered */}
          <input type="file" id="input-video" hidden onChange={handleChange}/>
          {/* container that holds the video. this container has the dropBoxFile CSS style */}
          {/* <div className=""> */}
              {/* Display the box logo */}
              <img src={logoDrop} alt="File drop logo" className="boxImg"/>
              {/* specify the accepted files. */}
              <p>Upload Video File <strong>(.mp4, .m4v, .mov)</strong></p>
          {/* </div> */}
      </label>

    </div>
  )
}

export default Upload