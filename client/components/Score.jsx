function Score(props) {
    return (
        <div className="scoreContainer">
                <p>Score:</p>
                <div className="score">
                    { props.loading ? <div className="dot-elastic"></div> : <p>{props.grade}</p>}
                </div>
        </div>
    )
}

export default Score;