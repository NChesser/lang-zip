/*
	About: Main Component
*/

// Routing
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Start from "./pages/home/Start";
import Toolbar from "./components/layout/Toolbar";

// Styles
import "./assets/styles/layout.css";

// Components
const YouTubeItem = () => {
	// Props
	// const { title, description, difficulty } = props;
	const title = "Dreaming Spanish";
	const description = "Hello World";
	const difficulty = "super-beginner";

	return (
		<div className="container">
			<h2>{title}</h2>
			<h4>{difficulty}</h4>
			<p>{description}</p>
		</div>
	)
};

// TODO: State Managemetn


function App() {
	const navigate = useNavigate();

	return (
		<div>
			<Toolbar>
				<header className="app-toolbar primary-header flex">
					<div className="primary-logo">
						<h1 className="primary-title disable-gutters" onClick={() => navigate('/')}>
							LangZip
						</h1>
					</div>
					<nav>
						<ul className="primary-navigation flex">
							<li>
								<Link to='/start'>Start</Link>
							</li>
							<li>
								<Link to='/categories'>Categories</Link>
							</li>
							<li>
								<Link to='/languages'>Languages</Link>
							</li>
						</ul>
					</nav>
				</header>
			</Toolbar>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/start' element={<Start />} />
				<Route path='/categories' element={<p>Categories Page</p>} />
				<Route path='/youtube/:selectedItem' element={<YouTubeItem />} />
			</Routes>
		</div>
	);
}

export default App;
