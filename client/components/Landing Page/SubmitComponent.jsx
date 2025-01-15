import React from 'react'
import { Link } from "react-router-dom"

function SubmitComponent() {
  return (
    <div className='component'>

        <p className='submitComponentTitle font-caveat'> TRY NOW!</p>

        <Link to={"/Easy-Social-Media/tool"}>

          <button className='btn-submit btn-animation'>UPLOAD VIDEO</button>

        </Link>

    </div>
  )
}

export default SubmitComponent