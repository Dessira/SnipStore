import { Link } from 'react-router-dom'

const Signin = () =>{ 
	return (
	<div className="Signin-page">
		<h1>SS Snipstore</h1>
		<h2>Sign into your account</h2>
		<form>
		<h3>Email</h3>
		<input/>
		<h3>Password</h3>
		<input/>
		<button><Link to="/user">Signin</Link></button>
		<link></link>
		</form>

	</div>
	);
}
export default Signin
