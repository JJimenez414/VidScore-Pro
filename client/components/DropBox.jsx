import FileDrop from "./FileDrop"
import Request from "./APIRequest"
import Video from "./Video";
import Grade from "./Grade"
import { useEffect, useState } from "react";

function DropBox (props) {

    const [File, setFile] = useState(); 

    function getFile(getFile) {
        setFile(getFile);

    }

    useEffect(() => {
        const postVideoFunc = async () => {
            try {
                const result = await Request.postVideo(File, "video.mp4");
                props.doesFileExists(true);
            } finally {
                console.log("finally");
            }
        }

        if (File) {
            postVideoFunc();
        }
        
    }, [File])

    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;