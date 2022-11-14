//import { Link } from 'react-router-dom'
import { useState } from "react"
const Signup = () =>{ 

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		const user = {name, email, password}

		fetch('http://127.0.0.1:5000/signup', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		}).then((response) => response)
   .then((data) => {
      alert(data[0].err);
      // Handle data
   })
   .catch((err) => {
      alert(err.message);
   });
	}
	return (
	<div className="Signup-page">
		<h1>SS Snipstore</h1>
		<h2>Create an account</h2>
		<form onSubmit={handleSubmit}>
		<h3>Name</h3>
		<input required className="signup" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		<h3>Email</h3>
		<input required className="signup" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
		<h3>Password</h3>
		<input required className="signup" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<button>Signup</button>
		</form>
	</div>
	);
}
export default Signup
