import logoDrop from "/src/assets/dropbox.svg"

function FileDrop (props) {

    function handleChange(event) {
        event.preventDefault();
        if (event.target.files.length != 0) {
            props.getFile(URL.createObjectURL(event.target.files[0]))
        }   
    }

    return (
        <div className="dropBoxContainer">
            <label htmlFor="input-video" id="inputLabel"> 
                <input type="file" id="input-video" hidden onChange={handleChange}/>
                <div className="dropBoxFile">
                        <img src={logoDrop} alt="" className="boxImg"/>
                        <p>File Drop</p>
                        <p>Only video file are accepted.</p>
                </div>
            </label>
        </div>
    )
}

export default FileDrop;