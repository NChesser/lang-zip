/*
	About: Main Component
*/

// Components
import Home from "./pages/Home";

// Styles
import "./assets/App.css";
import "./assets/styles/layout.css";


function App() {
	return (
		<div>
			<h3 className="title">
				LangZip
			</h3>
			<p className="subtitle">
				By Nick Chesser
			</p>

			<Home />
		</div>
	);
}

export default App;
