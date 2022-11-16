
import Side from "./Side"
import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";

// once page is rendered once do this and store it
//const { id } = useParams();

const User = props => {
	let params = useParams()
	const use_id = params.id
	const [drafts, setDrafts] = useState(null)
	const [url, setUrl] = useState("")
	const fetchData = () => {
	   fetch(`http://127.0.0.1:5000/user/draft/${use_id}`)
		.then(response => response.json())
		.then(data => {
			setDrafts(data)
			alert(data + 'cgfd')
		})
}
	useEffect(() => {
		alert('hey')
		fetchData();
		setUrl("/draft/" + use_id)
	}, []);
	let history = useHistory();
	function changePage(d_url, content, name, d_id) {
		
		history.push({
			pathname: d_url,
			state: { d_name: name, d_content: content, id: d_id }
	
		},		console.log(content));
	  }
		return (
		  <div>
			{(() => {
			  if (drafts) {
				return (
					<div className="User-page">
					<Side />
					<div>
					<h2>Chicken</h2>{
					drafts.map( (draft) => (
						<div key={ draft.draft_id } id="user_draft">
							<h3>{ draft.draft_name }</h3>
							<p>{draft.draft_txt.substring(0, 10)}</p>
							<button onClick = {() => { changePage(url, draft.draft_txt, draft.draft_name, draft.draft_id);} }>view</button>
						</div>
					))}
				<button onClick = {() => { changePage(url, "", "", "");} }>new draft</button>
					</div>
			
				</div>
				)} 
			})()}
		  </div>
		)
	
}
export default User
