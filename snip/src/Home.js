
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
		<button onClick={handleClick_bt1}>Signin</button>
		<p>Already have an account <a href="/">sign up for free</a></p>

	</div>
	);
}
export default Home
