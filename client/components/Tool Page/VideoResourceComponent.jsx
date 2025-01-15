import React from 'react'
import MarketingConcepts from './MarketingConcepts'
import VideoResources from './VideoResources'

function VideoResourceComponent() {
  return (
    <div className='component'>

        <div className='video-resource-grid'> 

            <MarketingConcepts />

            <VideoResources />

        </div>

    </div>
  )
}

export default VideoResourceComponent