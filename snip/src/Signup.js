import { useHistory } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory()

	const handleSubmit = (e) => {
	e.preventDefault()
	const user = {name, email, password}
		fetch('http://127.0.0.1:5000/signup', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		}).then((response) => response.json())
		.then((data) => {
			let id = JSON.stringify(data.id)
			if (id == "-1"){ document.getElementBy('err').style.display = "inline" }
			else{ history.push(`/user/${id}`)}
		})
		.catch((err) => {
			alert(err.message);
		})
	}
	return (
		<div className="Signup-page">
		<h1>SnipStore</h1>
		<span id = "err">email has been used</span>
		<h2>Create an account</h2>
		<form onsubmit={handleSubmit}>
		<h3>Name</h3>
		<input required className="inputs" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		<h3>Email</h3>
		<input required className="inputs" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
		<h3>Password</h3>
		<input required className="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<button>Save</button>
		</form>
		</div>
	)
	
}
export default Signup
