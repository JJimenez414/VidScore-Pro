import { useState } from "react";
function Metric (props) {

    const [display, setDisplay] = useState(true);

    // when a card is clicked, the display changes from true/false
    function cardDisplay(display) {
        setDisplay(display);
      }
    

    return (
        <div className="card descriptionFont" >
            
            <ul className="headTitle">
                <li>
                    {/* display the title */}
                    <h1 className="descriptionFont">{props.title}</h1> 
                </li>

                <li>    
                    {/* display arrow with animation */}
                    <div className="boxArrow" onClick={() => display === false ? cardDisplay(true) : cardDisplay(false)}>
                        <div className={display === true ? "arrowUp" : "arrowDow"}></div>
                        <div className={display === true ? "arrowUp" : "arrowDow"}></div>
                    </div>
                </li>
            </ul>
            
            {/* notVisible is a class that makes the card invisible. This class is added when a card is clicked.  */}
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

export default Metric;