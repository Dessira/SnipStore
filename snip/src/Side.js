import { Link, useParams } from 'react-router-dom'

const Side = () => {
	let params = useParams()
    const use_id = params.id
	const D_url = "/user/" + use_id
	const S_url = "/setting/" + use_id
	const O_url = "/help/" + use_id
	return (
	<div className="Side-page">
		<div>
        <div className='sidebar'>
		<i class="fa-solid fa-file-lines"></i>
			<p><Link to={D_url}>Drafts</Link></p>
		</div>
        <div className='sidebar'>
		<i class="fa-solid fa-gear"></i>
			<p><Link to={S_url}>Settings</Link></p>
		</div>
		<div className='sidebar'>
		<i class="fa-regular fa-circle-question"></i>
			<p><Link to={O_url}>Help</Link></p>
		</div>
		</div>
	</div>
	);
}
export default Side
