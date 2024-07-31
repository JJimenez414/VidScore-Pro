

function Header() {
    return (

        <ul className="navBar">
            <li> 
                <p style={{ fontFamily: "Poppins", color: "white"}}> VidScore Pro </p>
            </li>
            <li> 
                <p style={ { fontFamily: "Poppins", color: "white"}}> Help </p>
            </li>
            <li> 
                <a href="https://calendly.com/mark_nanez/nineyes-marketing-inquiry?month=2024-07">
                    <button className="btnAppointment" style={ { fontFamily: "Poppins"}}> Consult </button>
                </a>
            </li>            
        </ul>
    )
}

export default Header;