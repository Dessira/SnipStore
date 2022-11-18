import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "./Vector.svg"

const UserNav = () => {
	return (
        <div className="user-nav-cont">
		<div className="nav-container ">
		<nav className="navbar user-nav">
            <div className="left-user-nav"><Logo className="logo"/><h2>Snipstore
            </h2></div>
            <div className="right-user-nav"></div>
		</nav>
		</div>
        </div>
	);
}
export default UserNav;