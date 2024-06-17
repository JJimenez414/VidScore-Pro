function Video (props) {
    return(

        <video controls autoPlay width="250">
            <source src={props.videoFile} />
        </video>
    )
}

export default Video;