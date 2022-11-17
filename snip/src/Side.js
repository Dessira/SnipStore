import { Link, useParams } from 'react-router-dom'

const Side = () => {
	let params = useParams()
    const use_id = params.id
	const D_url = "/user/" + use_id
	const S_url = "/setting/" + use_id
	const O_url = "/overview/" + use_id
	return (
	<div className="Side-page">
        <Link to={D_url}><div>
			<p>Drafts</p>
		</div></Link>
        <Link to={S_url}><div>
			<p>Settings</p>
		</div></Link>
		<Link to={O_url}><div>
			<p>Overview</p>
		</div></Link>
	</div>
	);
}
export default Side
