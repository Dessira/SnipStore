import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "./Vector.svg"

const Navbar = () => {
	return (
		<div className="nav-container">
		<nav className="navbar">
		<div className="left-section">
		<Logo/>
		<h3>snipstore</h3>
		<a href="/overview">Overview</a>
		</div>
		<div className="right-section">
		<button className="sign-up-btn"><Link to="/sign-up">Signup</Link></button>
		<button className="sign-in-btn"><Link to="/sign-in" >Signin</Link></button>
		</div>
		</nav>
		</div>
	);
}
export default Navbar;
