import Feedback from "../components/Feedback"




function Description() {
    return ( 

      <div className="description"> 
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