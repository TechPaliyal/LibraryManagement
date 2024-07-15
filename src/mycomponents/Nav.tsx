import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full">
      <nav className="flex gap-7 text-[22px] font-medium pt-5 text-gray-500">
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
  );
}

export default Nav;
