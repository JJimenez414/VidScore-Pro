import { useState, useEffect } from "react";
import Feedback from "../components/Feedback"
import Grade from "../components/Grade"
import Request from "./APIRequest";


function Description(props) {

  const [total, setTotal] = useState(0)
  const [scaled_percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSendData = async () => {
        setLoading(true);
        try {
          const result = await Request.sendData();
          setPercentage(result.scaled_percentage);
        } finally {
          setLoading(false);
        }
      };

      if (props.fileExists == true) {
        handleSendData();
      }

    }, [props.fileExists]);

   useEffect(() => {

      setTotal(scaled_percentage + total);

   }, [scaled_percentage])


  return ( 

    <div className="description"> 
    
      <Grade grade={ loading ? "Loading..." : total} />

      <Feedback 
        title="Length" 
        grade="00" 
        results="Result: 15 seconds"  
        description="-:We analyse the length of the video and compare to the average length to short media content."
      />
      {/* <button onClick={handleSendData}>Hello world</button> */}

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