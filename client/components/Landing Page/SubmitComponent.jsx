import { Link } from "react-router-dom"

function SubmitComponent() {
  return (

    // This is the button that will take the user to the tool
    <div className='component'>

        <p className='submitComponentTitle font-caveat'> TRY NOW!</p>

        {/* links the btn to this link */}
        <Link to={"/Easy-Social-Media/tool"}>

          <button className='btn-submit btn-animation'>UPLOAD VIDEO</button>

        </Link>

    </div>
  )
}

export default SubmitComponent