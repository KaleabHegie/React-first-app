import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
              <h1>Daily Movie's</h1>
              <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"> New Movie </Link>
              </div>
        </nav>
     );
}
 
export default NavBar;
