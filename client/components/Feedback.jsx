import { useState } from "react";
function Feedback (props) {

    const [display, setDisplay] = useState(true);

    function cardDisplay(display) {
        setDisplay(display);
      }
    

    return (
        <div className="card descriptionFont" >
            <ul className="headTitle">
                <li>
                    <h1 className="descriptionFont">{props.title}</h1> 
                </li>

                <li>    
                    <div className="boxArrow" onClick={() => display === false ? cardDisplay(true) : cardDisplay(false)}>
                        <div className={display === true ? "arrowUp" : "arrowDow"}></div>
                        <div className={display === true ? "arrowUp" : "arrowDow"}></div>
                    </div>
                </li>
            </ul>
                
            <div className={display === true ? "notVisible" : ""}>
                <p><strong>Importance:</strong></p>
                <p className="desNote descriptionFont">{props.description}</p>
                <p className="descriptionFont"><strong>Score: {props.grade}%</strong></p>
                
                <p className="descriptionFont">{props.results}</p>
                <p className="descriptionFont">{props.results2}</p>
                
            </div>
        </div>
    )
}

export default Feedback;