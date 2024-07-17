import FileDrop from "./FileDrop"
import Request from "./APIRequest"
import Video from "./Video";
import { useEffect, useState } from "react";

function DropBox (props) {

    const [File, setFile] = useState(); 


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

    // useEffect(() => {
    //     if (File) {
    //       // This is calling the postVideo function from the APIRequest.js file
    //       Request.postVideo(File, "video.mp4");
    //       props.FileExists(true);
    //     }
    //   }, [File, props]);

    if (File) {
        postVideoFunc();
    }

    return (
        <>
            {File ?  <Video videoId={File} videoFile={File}/> : <FileDrop getFile={getFile}/>}
        </>
    )
}

export default DropBox;