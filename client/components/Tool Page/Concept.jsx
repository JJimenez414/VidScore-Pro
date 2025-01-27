import {useState } from 'react'
import ResourceDescription from './ResourceDescription'

function Concept({concept, description}) {


  const [visibility, setVisibility] = useState(false)

  function onClick() {
    setVisibility((visibility) => !visibility);
  }

  return (

    // displays the resource btn
    <div className='center-items'>
        {/* button */}
        <button className='concept concept-animation' onClick={() => onClick()}> {concept}  </button>

        {/* description for the button that gets triggered when clicked. */}
        <ResourceDescription visibility={visibility} setVisibility = {setVisibility} concept={concept} description={description}/>

    </div>
  )
}

export default Concept