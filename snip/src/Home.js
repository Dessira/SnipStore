import { Link } from "react-router-dom"
import { ReactComponent as Design } from "./Idea.svg"

import Navbar from './Navbar'
const Home = () => {
	return (
	<div className="Home-page">
		<Navbar />
		<div className="top">
		<div className="top-left">
			<div className="left-content">
		<h1 className="head-text">Save your best <br/>ideas for later on <br/>snipstore</h1>
		<p>Create, store and access text, code snippets and draft notes on any device.</p>
		<button className="home-sign-in"><Link to="/sign-in">Signin</Link></button>
		<p>Don't have an account <Link to="/sign-up">sign up for free</Link></p>
		</div>
		</div>
		<div className="top-right"><Design className="home-design"/></div>
		</div>
		<div className="bottom"></div>

	</div>
	);
}
export default Home
