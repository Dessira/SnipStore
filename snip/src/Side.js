import { Link, useParams } from 'react-router-dom'

const Side = () => {
	let params = useParams()
    const use_id = params.id
	const D_url = "/user/" + use_id
	const S_url = "/setting/" + use_id
	const O_url = "/overview/" + use_id
	return (
	<div className="Side-page">
        <div className='sidebar'><Link to={D_url}>
			<p>Drafts</p>
		</Link></div>
        <div className='sidebar'><Link to={S_url}>
			<p>Settings</p>
		</Link></div>
		<div className='sidebar'><Link to={O_url}>
			<p>Overview</p>
		</Link></div>
	</div>
	);
}
export default Side
