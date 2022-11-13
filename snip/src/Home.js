import { Link } from "react-router-dom"

import Navbar from './Navbar'
const Home = () => {
	const handleClick_bt1 = () => {
		alert("hello")
	}
	return (
	<div className="Home-page">
		<Navbar />
		<p>Save your best ideas for later on snipstore</p>
		<p>Create and store text, code snippets and draft notes. access them on any device</p>
		<button><Link to="/sign-in">Signin</Link></button>
		<p>Already have an account <Link to="/sign-up">sign up for free</Link></p>

	</div>
	);
}
export default Home
