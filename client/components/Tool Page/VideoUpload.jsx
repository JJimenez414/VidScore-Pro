import {React, useState} from 'react'
import Upload from './Upload'
import Video from './Video';

function VideoUpload() {

  const [video, getVideo] = useState(null);



  return (

    <>
     
      <div className='video-upload center-items'>
        
        {video ? <Video videoId={video} video={video}/> : <Upload getVideo={getVideo}/>}
      
      </div>

    </>

  )
}

export default VideoUpload