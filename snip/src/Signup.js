import { Link } from 'react-router-dom'


const Signup = () =>{ 
	return (
	<div className="Signup-page">
		<h1>SS Snipstore</h1>
		<h2>Create an account</h2>
		<form>
		<h3>Name</h3>
		<input/>
		<h3>Email</h3>
		<input/>
		<h3>Password</h3>
		<input/>
		<button><Link to="/sign-in">Signup</Link></button>
		</form>
	</div>
	);
}
export default Signup
