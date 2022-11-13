import { Link } from 'react-router-dom'
import Side from "./Side"

const User = () => {
	return (
	<div className="User-page">
		<Side />
		<div>
            <p>draft name</p>
            <button>View</button>  
        </div>
        <div>
            <p>draft name</p>
            <button>View</button>
        </div>
        <button><Link to="/draft">new draft</Link></button>
	</div>
	);
}
export default User
