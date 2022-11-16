import Side from "./Side"
import { useState } from "react"
import { useParams } from "react-router-dom"


const Draft = () => {
	let params = useParams()
        const use_id = params.id
	const [draft_name, setDname] = useState("")
        const [draft_txt, setTxt] = useState("")

	const handleSubmit = (e) => {
                e.preventDefault()
        const user = {draft_name, draft_txt}
	fetch(`http://127.0.0.1:5000//user/draft/${use_id}`, {
		method: 'POST',
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
			alert(err.message);                                     });
	}
	return (
	<div className="Draft-page">
        <Side />
	<span id="draft_err">Error saving draft please refresh</span>
        <form onSubmit={handleSubmit}>
	   <input required className="draftt_item" type="text" value={draft_name} onChange={(e) => setDname(e.target.value)}/>
           <input required className="draft_item" type="text" value={draft_txt} onChange={(e) => setTxt(e.target.value)}/>
            <button className="save-btn">save</button>
        </form>
		<button className="delete-btn">delete</button>
	</div>
	);
}
export default Draft
