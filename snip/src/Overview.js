import { ReactComponent as Design } from "./Idea.svg"

import Navbar from './Navbar'
const Overview = () => {

	return (
	<div className="Home-page">
		<Navbar />
        <div>
            <h1>Welcome to snipstore</h1>
            <p>Snipstore is a store for your drafts, code snippets and important notes. Using snipstore you will be able to create store and edit your drafts. its simple layout makes it easy to use. it was created as my foundations portfolio project. I choose this project to solve one of the problems affecting the students in my school. They often code on multiple devces myself included. sometimes it can be tasking to shuffle information found or needed across devices. Snipstore fixes that enabling you to access your  notes via any device.</p>
            <ul>
                <li>Front-end:
                    <ul>
                       <li>React</li>
                       <li>CSS</li>
                       <li>HTML</li>
                    </ul>
                </li>
                <li>Backend:
                    <ul>
                        <li>Flask</li>
                        <li>SQLITE DATABASE</li>
                        <li>PYTHON</li>
                        <li>MARSHMALLOW</li>
                    </ul>
                </li>
            </ul>
            <p>This project was designed by UI and UX designer Newman Ogbo. View more of his works here</p>
            <p>Work on this project will continue to improve on authentication, user experience, security and new features. I am open to collaboration feel free to reach out on <a href="www.linkedin.com/in/desire-barine-b53493235">linkedin</a></p>
            <p>Live Demo:
                <iframe></iframe>
            </p>
            <p>Thanks for Visiting</p>
            <Design />
        </div>
	</div>
	);
}
export default Overview