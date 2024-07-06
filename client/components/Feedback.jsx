
function Feedback (props) {
    return (
        <div className="card">
            <ul className="headTitle">
                <li>
                    <h1>{props.title}</h1> 
                </li>

                <li>
                    <div className="boxArrow" onClick={() => console.log("hello")}>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>
                </li>
            </ul>
            <p>{props.results}</p>
            <p className="desNote">{props.description}</p>
        </div>
    )
}

export default Feedback;