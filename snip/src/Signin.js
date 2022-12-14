//import { Link } from 'react-router-dom'
import{ useHistory } from 'react-router-dom'
import { useState } from "react"
import { ReactComponent as Logo } from "./Vector.svg"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Signin = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const history = useHistory()
                                                                   const handleSubmit = (e) => {                                      e.preventDefault()
        const user = {email, password}

                fetch('http://127.0.0.1:5000/signin', {
                        method: 'POST',                                            headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(user)
                }).then((response) => response.json())
   .then((data) => {
      //alert(response)
        let id = JSON.stringify(data.id)
        if (id == "-1"){ document.getElementById('signin_err').style.display = 'inline'}
           else{
            //setToken(true)
            console.log(JSON.stringify(data.token))
            history.push(`/dashboard/${id}`)
         }

      // Handle data
   })
   .catch((err) => {
      alert(err.message);
   });
								   }
      
	return (
	<div className="Signin-page">
      <div className='sign-form'>
		<h1 className="top-elem"><Logo />Snipstore</h1>
		<h2 className="top-elem">Sign into your account</h2>
		<span id="signin_err">User not found please signup</span>
		<form onSubmit={handleSubmit} className="form-input">
		<h3>Email</h3>
		<input required className="inputs" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
		<h3>Password</h3>
		<input required className="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<button className='btn input'>Next</button>
		</form>
      <Link to="/sign-up"><p>Sign up instead</p></Link>
      </div>
	</div>
	);
  /* Signin.propTypes = {
      setToken: PropTypes.func.isRequired
   }*/
}
export default Signin
