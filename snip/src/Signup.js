//import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signin from './Signin'
import Home from './Home'
import { useState } from "react"

const Redir = (val) =>{
	if (val == true){
		<Switch>
  		<Redirect from="/sign-up" to="/sign-in" />
  		<Route path="/sign-in">
    		<Signin />
  		</Route>
		</Switch>

	}
	else {
		<Switch>                                                   <Redirect from="/sign-up" to="/" />
		<Route path="/">
		<Home />
                </Route>
                </Switch>
	}
}
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
		}).then((response) => response.json())
   .then((data) => {
      //alert(response)
	if (JSON.stringify(data.err) == "this email has been used"){ Redir('false')}
	   else{Redir('true')}

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
