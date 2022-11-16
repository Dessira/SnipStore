import { Link } from 'react-router-dom'
import Side from "./Side"
import React from 'react'
import { useParams } from "react-router-dom"
//import { useEffect } from "react"
import { useState } from "react"
import {useEffect} from 'react'

// once page is rendered once do this and store it
//const { id } = useParams();

const User = () => {
	let params = useParams()
	const use_id = params.id
	const [drafts, setDrafts] = useState({})
		alert('hello')
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
	}, []);
	//alert(drafts + "done")
	return (
		<div className="User-page">
		<Side />
		<div>
		{drafts && drafts.map((draft) => (<h2>{ draft.name}</h2>))}
		<h2>Chicken</h2>
        	<button><Link to="/draft">new draft</Link></button>
		</div>
	</div>
	);
}
export default User
