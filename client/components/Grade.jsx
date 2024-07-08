

function Grade(props) {
    return (
        <div className="gradeBox">
            <p className="grade">Score: {props.grade}%</p>
        </div>
    )
}

export default Grade;