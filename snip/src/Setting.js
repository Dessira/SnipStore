//import { Link } from 'react-router-dom'
/*import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signin from './Signin'
import Home from './Home'*/
import { useEffect, useState } from "react"
import Side from './Side'
import { useParams, useHistory } from "react-router-dom"
import UserNav from './UserNav'
import { ReactComponent as Logo } from "./Vector.svg"

const Setting = () =>{ 

	const params = useParams()
	const id = params.id
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const history = useHistory()
	
	useEffect(() => {
		fetch(`http://127.0.0.1:5000/user/${id}`, {
			method: 'GET'
		}).then((response) => response.json())
		.then((data) => {
			setName(JSON.stringify(data.name))
			setEmail(JSON.stringify(data.email))
			setPassword(JSON.stringify(data.password))
		})
		.catch((err) => {
		alert(err.message);
		});
	}, [])
	const handleSubmit = (e) => {
		e.preventDefault()
	const user = {name, email, password}

		fetch(`http://127.0.0.1:5000/user/${id}`, {
			method: 'PUT',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		}).then((response) => response.json())
   .then((data) => {
      //alert(response)
	let id = JSON.stringify(data.id)
	if (id == "-1"){ document.getElementById('set-err').style.display = 'inline'}
	   else{history.push('/')}

      // Handle data
   })
   .catch((err) => {
      alert(err.message);
   });
	}
	function deleteUser() {
		fetch(`http://127.0.0.1:5000//user/${id}`, {
		method: 'DELETE',
	}).then(() => {
		history.push("/")
	})
	}
	
	return (
	<div className="Settings-page">
		<UserNav />
		<div className="user-page-main">
		<Side />
		<div className="user-left">
		<div className="setting">
		<h1><Logo /> Snipstore</h1>
		<span id="set-err">An error occured try again</span>
		<h2>Settings</h2>
		<form onSubmit={handleSubmit} className="setting-form">
		<h3>Update Name</h3>
		<input required className="inputs" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
		<h3>Update Email</h3>
		<input required className="inputs" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
		<h3>Update Password</h3>
		<input required className="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<button className="btn" id="set-btn">Save</button>
		</form>
		</div>
	<button className="delete-btn" onClick={deleteUser}>delete</button>
	</div>
	</div>
	</div>
	);
}
export default Setting
