import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav className="flex gap-7 text-2x1">
        <li>
          <Link to={"/home"}>HOME</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
      </nav>
    </div>
  )
}

export default Nav