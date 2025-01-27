import VideoComponent from "./VideoComponent"
import SubmitComponent from "./SubmitComponent"
import ResouceComponent from "./ResouceComponent"
import ReviewsComponent from "./ReviewsComponent"


function LandingPage() {
  return (
    <div>
        {/* displays introduction video */}
        <VideoComponent />
        {/* Displays submit button */}
        <SubmitComponent />
        {/* Displays the resource grid */}
        <ResouceComponent />
        {/* Displays the reviews.  */}
        <ReviewsComponent />

    </div>
  )
}

export default LandingPage