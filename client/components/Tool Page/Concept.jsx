import {React, useState } from 'react'
import ResourceDescription from './ResourceDescription'

function Concept({concept, description}) {


  const [visibility, setVisibility] = useState(false)

  function onClick() {
    setVisibility((visibility) => !visibility);
  }

  return (
    <div className='center-items'>
        
        <button className='concept concept-animation' onClick={() => onClick()}> {concept}  </button>

        <ResourceDescription visibility={visibility} setVisibility = {setVisibility} concept={concept} description={description}/>

    </div>
  )
}

export default Concept