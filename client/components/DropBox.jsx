import FileDrop from "./FileDrop"
import Request from "./APIRequest"
import Video from "./Video";
import { useEffect, useState } from "react";

function DropBox (props) {

    const [File, setFile] = useState(); 

    const postVideo = () => {
        Request.postVideo(File)
        .catch(error => console.log(error));
    }

    function getFile(getFile) {
        setFile(getFile);

    }


    const postVideoFunc = async () => {
        try {
            const result = await Request.postVideo(File, "video.mp4");;
          } finally {
            props.doesFileExists(true);
          }
    }

    if (File) {
        Request.postVideo(File, "video.mp4")
    }

    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;