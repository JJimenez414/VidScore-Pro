import FileDrop from "./FileDrop"
import Request from "./APIRequest"
import Video from "./Video";
import { useEffect, useState } from "react";

function DropBox () {

    const [File, setFile] = useState();

    const postVideo = () => {
        Request.postVideo(File)
        .catch(error => console.log(error));
    }

    function getFile(getFile) {
        setFile(getFile);

    }

    if (File) {
        Request.postVideo(File, "video")
    }

    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;