import React from 'react'
import VideoUpload from './VideoUpload'
import VideoMetrics from './VideoMetrics'

function VideoUploadComponent() {
  return (
    // diplays the upload and metrics.
    <div className='component center-items'>
        
        <div className='video-upload-container'>

            <VideoUpload />

            <VideoMetrics />

        </div>


    </div>
  )
}

export default VideoUploadComponent