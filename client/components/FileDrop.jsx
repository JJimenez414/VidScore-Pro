import logoDrop from "/src/assets/dropbox.svg"

function FileDrop (props) {

    function handleChange(event) {
        event.preventDefault();
        if (event.target.files.length != 0) {
            props.getFile(URL.createObjectURL(event.target.files[0]));
        }   
    }


    return (
        <div className="dropBox">
            <label htmlFor="input-video" id="inputLabel"> 
                <input type="file" id="input-video" hidden onChange={handleChange}/>
                <div className="dropBoxFile">
                        <img src={logoDrop} alt="File drop logo" className="boxImg"/>
                        <p>Upload Video File <strong>(.mp4, .m4v, .mov)</strong></p>
                </div>
            </label>
        </div>
    )
}

export default FileDrop;