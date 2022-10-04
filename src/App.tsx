/*
	About: Main Component
*/

// Components
import Home from "./pages/Home";

// Styles
import "./assets/App.css";


function App() {
	return (
		<div>
			<h3 className="title">
				Lang-Zip
			</h3>
			<p className="subtitle">
				By Nick Chesser
			</p>

			<Home />
		</div>
	);
}

export default App;
