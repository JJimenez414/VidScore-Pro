function Video ({video, videoId}) {
    return(
//      creates a video tag with the css style of video.
        <video className="video" controls width="250" key={videoId}>
            {/* sets the source of the video to videoFile that is being passed by the props. */}
            <source src={video} />
        </video>
    )
}

export default Video;