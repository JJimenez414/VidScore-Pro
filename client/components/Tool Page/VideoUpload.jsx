import {useEffect, useState} from 'react'
import Upload from './Upload'
import Video from './Video';
import Request from '../APIRequest'
import { useMetrics } from './MetricsContext';

function VideoUpload() {

  const [video, getVideo] = useState(null);
  const {setAspect, setLength, setResolution} = useMetrics();

  useEffect(() => {

    if (!video) return; 

    const postVideo = async () => {
      try {

        const response = await Request.postVideo(video); // stops the async function until the request finishes.

        setAspect(response['aspect']['aspect_boolean']); // TEMPORARY: We have to change this to the right data.
        setLength(response['length']['length_boolean']); // TEMPORARY: We have to change this to the right data.
        setResolution(response['resolution']['resolution_boolean']); // TEMPORARY: We have to change this to the right data.
        console.log("Data has been saved")

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