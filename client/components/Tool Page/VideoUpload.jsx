import {React, useEffect, useState} from 'react'
import Upload from './Upload'
import Video from './Video';
import Request from '../APIRequest'

function VideoUpload() {

  const [video, getVideo] = useState(null);

  useEffect(() => {

    if (!video) return; 

    const postVideo = async () => {
      try {

        const response = await Request.postVideo(video); // stops the async function until the request finishes.

        console.log(response);

      } catch (err) {
        console.error("Error uploading video", err);
      }
    }

    postVideo();

  }, [video]);


  return (

    <>

      {/* continer for video */}
      <div className='video-upload center-items'>
        
        {/* if video exists display it else prompt the user to upload it */}
        {video ? <Video videoId={video} video={video}/> : <Upload getVideo={getVideo}/>}
      
      </div>

    </>

  )
}

export default VideoUpload