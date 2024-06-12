import logoDrop from "/src/assets/dropbox.svg"
import { useRef } from "react";

function FileDrop () {

    const getFile = useRef(null);


    function handleChange(event) {
        event.preventDefault();
        console.log(getFile.current.files[0].name);
    }

    return (
        <div className="dropBoxContainer">
            <label htmlFor="input-video" id="inputLabel"> 
                <input ref={getFile} type="file" id="input-video" hidden onChange={handleChange}/>
                <div className="dropBoxFile">
                    <img src={logoDrop} alt="" className="boxImg"/>
                    <p>File Drop</p>
                </div>
            </label>
        </div>
    )
}

export default FileDrop;