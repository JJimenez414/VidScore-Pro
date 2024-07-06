import { useState } from "react";
import Feedback from "../components/Feedback"


function Description() {

  const [display, setDisplay] = useState(true);
  
  function cardDisplay(display) {
    setDisplay(display);
    console.log("Display");
  }

  return ( 

    <div className="
    description"> 
      <Feedback 
        title="Length" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
        display={cardDisplay}
      /> 

      <Feedback 
        title="Resolution" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
        display={cardDisplay}
      />

      <Feedback 
        title="Audio Stableness" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
        display={cardDisplay}
      />

      <Feedback 
        title="Volume Correctness"
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
        display={cardDisplay}
      />      
    </div>
  )
}

export default Description;