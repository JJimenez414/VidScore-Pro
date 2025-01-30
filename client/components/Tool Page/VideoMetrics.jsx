import React from 'react'
import Metrics from './Metrics'
import { useMetrics } from './MetricsContext'

function VideoMetrics() {

  const {aspect, length, resolution} = useMetrics();
  
  return (

    // diplays title and metrics.
    <div className='video-metrics'>

        <p className='font-caveat'> Video Score </p>

        <Metrics option1={aspect} option2={length} option3={resolution}/>

    </div>
  )
}

export default VideoMetrics