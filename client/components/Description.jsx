import { useState, useEffect } from "react";
import Feedback from "../components/Feedback"
import Grade from "../components/Grade"
import Request from "./APIRequest";
import Loading from "../components/Loading";


function Description(props) {

  const [total, setTotal] = useState(0);
  const [audio_percentage, setPercentage] = useState(0);
  const [length_percentage, setLengthPercentage] = useState(0);
  const [resolution_percentage, setResolutionPercentage] = useState(0);
  const [mean, setMean] = useState(0);
  const [dips, setDips] = useState(0);
  const [peaks, setPeaks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSendData = async () => {
        setLoading(true);
        try {
          const result = await Request.sendData();
          setPercentage(result.audio_percentage);
          setLengthPercentage(result.length_percentage);
          setResolutionPercentage(result.resolution_percentage);
          setDips(result.dips);
          setMean(result.mean);
          setPeaks(result.peaks)
        } finally {
          setLoading(false);
        }
      };

      if (props.fileExists == true) {
        handleSendData();
      }

    }, [props.fileExists]);

   useEffect(() => {

      setTotal(audio_percentage + total);

   }, [audio_percentage])

  return ( 

    <div className="description"> 
    
      <Grade grade={ loading ? <Loading /> : total} />

      <Feedback 
        title="Length" 
        grade={length_percentage} 
        results="Result: 15 seconds"  
        description="We determine the length of the video by analyzing the meta data."
      />

      <Feedback 
        title="Resolution" 
        grade={resolution_percentage} 
        results="Result: 15 seconds"  
        description="We determine resolution of the video by calculating the pixels inside the video frame.
                      anything below 1920 can reduce user retention."
      />

      <Feedback 
        title="Audio Stableness" 
        grade={audio_percentage} 
        results={"Mean (DB LVL): " + mean + " Dips: " + dips + " Peaks: " + peaks}  
        description="The dips and mean are calculated in a 2 second period span."
      />
    </div>
  )
}

export default Description;