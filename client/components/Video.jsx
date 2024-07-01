function Video (props) {
    return(

        <video className="video" controls autoPlay width="250" key={props.videoId}>
            <source src={props.videoFile} />
        </video>
    )
}

export default Video;