import { useState } from "react";

function Header() {

    const [activateHelp, setHelp] = useState(false);


    return (

        <ul className="navBar">
            <li> 
                <p> VidScore Pro </p>
            </li>
            <li> 
                <button className="btnHelp"> About </button>
            </li>   
        </ul>
    )
}

export default Header;