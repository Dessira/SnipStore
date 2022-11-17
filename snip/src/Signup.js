import { useHistory } from "react-router-dom"
import { useState } from "react"
import { ReactComponent as Logo } from "./Vector.svg"

const Signup = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [conpassword, setConpassword] = useState("")
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password == conpassword){
	
	const user = {name, email, password}
		fetch('http://127.0.0.1:5000/signup', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		}).then((response) => response.json())
		.then((data) => {
			let id = JSON.stringify(data.id)
			if (id == "-1"){ document.getElementById('err').style.display = "inline" }
			else{ history.push(`/user/${id}`)}
		})
		.catch((err) => {
			alert(err.message);
		})
	}
		else{
			document.getElementById(('err')).textContent="Password does not match"
			document.getElementById('err').style.display = "inline"
		}
	}
	return (
		<div className="Signup-page">
			<div className="sign-form">
		<h1 className="top-elem"><Logo />SnipStore</h1>
		<h2 className="top-elem">Create an account</h2>
		<span id = "err">email has been used</span>
		<form onSubmit={handleSubmit} className="form-input">
		<h3>Name</h3>
		<input required className="inputs" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		<h3>Email</h3>
		<input required className="inputs" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
		<h3>Password</h3>
		<input required className="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<h3>Confirm Password</h3>
		<input required className="inputs" type="password" value={conpassword} onChange={(e) => setConpassword(e.target.value)} />
		<button className="btn inputs">Next</button>
		</form>
		<p>Sign in instead</p>
		</div>
		</div>
	)
	
}
export default Signup
