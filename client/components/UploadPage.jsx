import DropBox from "./DropBox";
import MetricTest from "./MetricTest";
import { useState } from 'react'

function UploadPage() {

    const [fileExists, setFileExists] = useState();

    //function stores the result of wheather the user uploaded a file.
    function doesFileExists(exists) {
        setFileExists(exists)
    }

  return (

    <div className="upLoadPageGrid">
            
        {/* we will display the drop box. doesFileExists will be used to display the loading animation for the score  */}
        <DropBox doesFileExists={doesFileExists}/>

    </div>

  )
}

export default UploadPage