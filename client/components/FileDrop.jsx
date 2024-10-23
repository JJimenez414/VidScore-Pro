import logoDrop from "/src/assets/dropbox.svg"

function FileDrop (props) {

    function handleChange(event) {
        event.preventDefault();
        // checks if the user has uploaded a file, if so send the file to the DropBox.jsx class.
        if (event.target.files.length != 0) {
            props.getFile(URL.createObjectURL(event.target.files[0]));
        }   
    }


    return (
        <div className="dropBox">
            {/* create an input and label that access file */}
            <label htmlFor="input-video" id="inputLabel"> 
                {/* when the user uploads a file, the handleChange function will be triggered */}
                <input type="file" id="input-video" hidden onChange={handleChange}/>
                {/* container that holds the video. this container has the dropBoxFile CSS style */}
                <div className="dropBoxFile">
                        {/* Display the box logo */}
                        <img src={logoDrop} alt="File drop logo" className="boxImg"/>
                        {/* specify the accepted files. */}
                        <p>Upload Video File <strong>(.mp4, .m4v, .mov)</strong></p>
                </div>
            </label>
        </div>
    )
}

export default FileDrop;