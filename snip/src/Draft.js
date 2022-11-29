import Side from "./Side"
import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {useEffect} from 'react'
import UserNav from './UserNav'

const Draft = props => {
		const location = useLocation();
		let params = useParams()
        const use_id = params.id
		const [draft_name, setDname] = useState('')
        const [draft_txt, setTxt] = useState('')
		const [ old_id, setId ]  = useState(location.state.id)
		const history = useHistory()

		useEffect(() => {
		setDname(location.state.d_name)
		setTxt(location.state.d_content)
	}, []);
	const handleSubmit = (e) => {
                e.preventDefault()
        const user = {draft_name, draft_txt}
		if (old_id === ''){

	fetch(`http://127.0.0.1:5000//user/draft/${use_id}`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user)
	}).then((response) => response.json())
		.then((data) => {
			//alert(response)
			let id = JSON.stringify(data.id)
			if (id == "-1"){ document.getElementById('draft_err').style.display = 'inline'}
			else { 
				setId(data.draft_id)
				alert("data")
			}
			// Handle data
			})
			.catch((err) => {
			alert(err.message);
			 });
			}
			else{
				fetch(`http://127.0.0.1:5000//user/draft/${use_id}/${old_id}`, {
		method: 'PUT',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user)
	}).then((response) => response.json())
		.then((data) => {
			//alert(response)
			let id = JSON.stringify(data.id)
			if (id == "-1"){ document.getElementById('draft_err').style.display = 'inline'}
			else { alert("saved")}
			// Handle data
			})
			.catch((err) => {
			alert(err.message);
			 })
			}
	}
	function deleteDraft() {
		if(old_id != ''){
			fetch(`http://127.0.0.1:5000//user/draft/${use_id}/${old_id}`, {
				method: 'DELETE',
			}).then(() => {
				history.push(`/user/${use_id}`)
			})
				
	  }}
	console.log(old_id)
	return (
	<div className="Draft-page">
		<UserNav />
		<div className="user-page-main">
        <Side />
		<div className="user-left" >
	<span id="draft_err">Error saving draft please refresh</span>
        <form onSubmit={handleSubmit} className="draft-input">
	   <input required className="inputs" type="text" value={draft_name} onChange={(e) => setDname(e.target.value)}/>
           <textarea required className="text-inputs" type="text" value={draft_txt} onChange={(e) => setTxt(e.target.value)}/>
            <button className="btn inputs">save</button>
        </form>
		<button className="delete-btn" onClick={deleteDraft}>delete</button>
		</div>
		</div>
	</div>
	);
}
export default Draft
