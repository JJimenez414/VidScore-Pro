import upload from '../../src/assets/upload.svg'

function Upload({getVideo}) {

    function handleUpload(event) {
        event.preventDefault();
        // checks if the user has uploaded a file, if so send the file to the DropBox.jsx class.
        if (event.target.files.length != 0) {
            getVideo(URL.createObjectURL(event.target.files[0]));
        }   

        console.log("hello")
    }

    return (
        <label className='video-upload center-items' htmlFor='input-video' id='input-label'>
        
            <input type='file' id='input-video' hidden accept='.mp4, .mp3' onChange={handleUpload}/>

            <div className='video-upload-icon-container'>

                <img src={upload} alt="File drop log" className='video-upload-icon'/>

                <p className='video-upload-icon-description'> Upload a file. .mp4 & .mp3</p>

            </div>
            
        </label>
    )
}

export default Upload