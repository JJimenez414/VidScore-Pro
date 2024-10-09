import { useState } from "react";
import HelpDescription from "./About";

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
                <p> VidScore Pro </p>
            </li>
            <li> 
                <button className="btnHelp" onClick={activateTab}> About </button>
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