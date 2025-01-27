import { Link } from 'react-router-dom'

function Header() {
  return (

    // creates a simple list items 
    <ul className="navBar">

        <li className="font-caveat">

          <Link to={"/Easy-Social-Media/"}>
            <button className='nav-bar-btn'> Title </button>
          </Link>

        </li>

        <li>
          
          <Link to={"/Easy-Social-Media/tool"}>
            <button className='nav-bar-btn'> Tool </button>
          </Link>

        </li>

        <li>
          Sign In
        </li>

    </ul>
  ) 
}

export default Header