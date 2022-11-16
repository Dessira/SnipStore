import { Link } from 'react-router-dom'
import Side from "./Side"
import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import {useEffect} from 'react'

// once page is rendered once do this and store it
//const { id } = useParams();

const User = () => {
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
						<div key={ draft.draft_id }>
							<h3>{ draft.draft_name }</h3>
							<p>{draft.draft_txt.substring(0, 10)}</p>
							<button id="view_draft">view</button>
						</div>
					))
			}
<button><Link to={url}>new draft</Link></button>
					</div>
			
				</div>
				)
			  } 
			})()}
		  </div>
		)
	
}
export default User
