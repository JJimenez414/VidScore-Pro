import { useState } from "react";

function Header() {

    const [activateHelp, setHelp] = useState(false);


    return (

        <ul className="navBar">
            <li> 

                <p> VidScore Pro </p> 

            </li>

            <li> 
                <button className="navBarBtn"> About </button>
            </li>   

            <li> 
                <button className="navBarBtn"> Help </button>
            </li>   

            <li> 
                <button className="navBarBtn"> Library </button>
            </li>   

            <li> 
                <button className="navBarBtn"> Login </button>
            </li>   
        </ul>
    )
}

export default Header;