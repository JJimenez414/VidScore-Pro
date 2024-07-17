import { useState } from "react";
import Feedback from "../components/Feedback"
import Grade from "../components/Grade"
import Request from "./APIRequest";


function Description() {

  const [scaled_percentage, setPercentage] = useState(0);
  Request.sendData().then(data => {
    setPercentage(data.scaled_percentage);
  });

  return ( 

    <div className="description"> 
      <Grade grade={scaled_percentage}/>

      <Feedback 
        title="Length" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
      />

      <Feedback 
        title="Resolution" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
      />

      <Feedback 
        title="Audio Stableness" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
      />

      <Feedback 
        title="Volume Correctness"
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
      />      
    </div>
  )
}

export default Description;