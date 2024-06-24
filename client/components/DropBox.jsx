import FileDrop from "./FileDrop"
import Video from "./Video";
import { useState } from "react";

function DropBox () {

    const [File, setFile] = useState();

    function getFile(getFile) {
        setFile(getFile);
    }


    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;