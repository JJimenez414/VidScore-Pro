function Video (props) {
    return(
//      creates a video tag with the css style of video.
        <video className="video" controls autoPlay width="250" key={props.videoId}>
            {/* sets the source of the video to videoFile that is being passed by the props. */}
            <source src={props.videoFile} />
        </video>
    )
}

export default Video;