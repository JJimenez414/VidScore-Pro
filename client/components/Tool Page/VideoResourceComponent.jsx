import React from 'react'
import MarketingConcepts from './MarketingConcepts'
import VideoResources from './VideoResources'

function VideoResourceComponent() {
  return (
    // diplays the resource grid and inside diplays marketing and video resources.
    <div className='component'>

        <div className='video-resource-grid'> 

            <MarketingConcepts />

            <VideoResources />

        </div>

    </div>
  )
}

export default VideoResourceComponent