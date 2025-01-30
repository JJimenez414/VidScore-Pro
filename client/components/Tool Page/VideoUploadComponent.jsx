import React from 'react'
import VideoUpload from './VideoUpload'
import VideoMetrics from './VideoMetrics'
import { MetricsProvider } from './MetricsContext'

function VideoUploadComponent() {
  return (
    // diplays the upload and metrics.
    <div className='component center-items'>
        
        <MetricsProvider>
          <div className='video-upload-container'>

              <VideoUpload />

              <VideoMetrics />

          </div>
        </MetricsProvider>

    </div>
  )
}

export default VideoUploadComponent