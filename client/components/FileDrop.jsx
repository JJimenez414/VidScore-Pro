import Video from "./Video";
import logoDrop from "/src/assets/dropbox.svg"
import { useRef, useState } from "react";

function FileDrop () {

    const [File, setFile] = useState();

    function handleChange(event) {
        event.preventDefault();
        if (event.target.files.length != 0) {
            setFile(() => { 
                
                return URL.createObjectURL(event.target.files[0])
                
                });
        }   
    }

    return (
        <div className="dropBoxContainer">
            <label htmlFor="input-video" id="inputLabel"> 
                <input type="file" id="input-video" hidden onChange={handleChange}/>
                <div className="dropBoxFile">
                    <img src={logoDrop} alt="" className="boxImg"/>
                    <p>File Drop</p>

                    {File && (
                        <Video videoFile={File} />
                    )}

                </div>
            </label>
        </div>
    )
}

export default FileDrop;