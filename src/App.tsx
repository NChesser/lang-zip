/*
	About: Main Component
*/

// Components
import Home from "./pages/Home";
import Toolbar from "./components/layout/Toolbar";

// Styles
import "./assets/styles/layout.css";


function App() {
	return (
		<div>
			<Toolbar>
				<h1 className="title">
					LangZip
				</h1>
				<a className="nav-link" href="google.com">
					Start
				</a>
				<a className="nav-link" href="google.com">
					Categories
				</a>
				<div style={{ flexGrow: 1 }} />
				<a className="nav-link" href="google.com">
					Language
				</a>
			</Toolbar>

			<Home />
		</div>
	);
}

export default App;
