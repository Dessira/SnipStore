
import Side from "./Side"
import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import UserNav from './UserNav'

//<p>{draft.draft_txt.substring(0, 30)}</p>
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
						<UserNav />
						<div className="user-page-main">
					<Side />
					
					<div className="user-left">
					<h2>Drafts</h2>
					<div className="draft-list">
					{drafts.map( (draft) => (
						<div key={ draft.draft_id } id="user_draft">
							<div className="draft-left">
							<i class="fa-solid fa-file-lines"></i>
							<p>{ draft.draft_name.substring(0, 30) }</p></div>
							<i class="fa-solid fa-ellipsis-vertical" onClick = {() => { changePage(url, draft.draft_txt, draft.draft_name, draft.draft_id);} }></i>
						</div>
					))}</div>
					<i className="fa-solid fa-plus fa-5x"  onClick = {() => { changePage(url, "", "", "");} }></i>
		
					
					</div>
			</div>
				</div>
				)} 
			})()}
		  </div>
		)
	
}
export default User
