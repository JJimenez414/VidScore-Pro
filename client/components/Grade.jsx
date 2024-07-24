import Loading from "../components/Loading";

function Grade(props) {
    return (
        <div className="gradeBox">
            <div className="grade">
                <p>Score: </p>
            </div>
            
            <div className="loadingGradeContainer">
                { props.loading ? <div className="dot-elastic"></div> : props.grade}
            </div>
        </div>
    )
}

export default Grade;