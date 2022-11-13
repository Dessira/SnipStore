import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar">
		<div className="left-section">
		<h3>SS snipstore</h3>
		<a href="/overview">Overview</a>
		</div>
		<div className="right-section">
		<button><Link to="/sign-up">Signup</Link></button>
		<button><Link to="/sign-in">Signin</Link></button>
		</div>
		</nav>
	);
}
export default Navbar;
