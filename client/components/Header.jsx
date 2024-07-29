import { useState } from "react";
import HelpDescription from "./helpDescription";


function Header() {
    const [activateHelp, setHelp] = useState(false);

    function activateTab() {
        if (activateHelp === false) {
            setHelp(true);
        } else {
            setHelp(false);
        }
        console.log(activateHelp);
    }
    return (

        <ul className="navBar">
            <li> 
                <p> highRes </p>
            </li>
            <li> 
                <button className="btnHelp" onClick={activateTab}> Help </button>
                {activateHelp && <HelpDescription/>}
            </li>
            <li> 
                <a href="https://calendly.com/mark_nanez/nineyes-marketing-inquiry?month=2024-07">
                    <button className="btnAppointment"> Consult </button>
                </a>
            </li>            
        </ul>
    )
}

export default Header;