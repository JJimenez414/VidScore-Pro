import Summary from "./Summary";
import { useState } from 'react'
import UploadConatiner from "./UploadContainer";

function UploadPage() {

    const [fileExists, setFileExists] = useState();

    //function stores the result of wheather the user uploaded a file.
    function doesFileExists(exists) {
        setFileExists(exists)
    }

  return (

    <div className="upLoadPageGrid">
            
        {/* we will display the drop box. doesFileExists will be used to display the loading animation for the score  */}
        {/* <DropBox doesFileExists={doesFileExists}/> */}

        {/* display metrics */}
        {/* <Metrics fileExists={fileExists}/> */}

        <div className='uploadContainer'>

          <UploadConatiner doesFileExists={doesFileExists}/>
          <Summary/>

        </div>



    </div>

  )
}

export default UploadPage