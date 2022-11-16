import { Link, useParams, useHistory } from 'react-router-dom'

const Side = () => {
	let params = useParams()
    const use_id = params.id
	const url = "/user/" + use_id
	return (
	<div className="Side-page">
        <Link to={url}><div>
			<p>Drafts</p>
		</div></Link>
        <Link to={url}><div>
			<p>Drafts</p>
		</div></Link>
		<Link to={url}><div>
			<p>Drafts</p>
		</div></Link>
	</div>
	);
}
export default Side