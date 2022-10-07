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

				<header className="primary-header flex">
					<div className="primary-logo">
						<h1 className="primary-title disable-gutters">
							LangZip
						</h1>
					</div>

					<nav>
						<ul className="primary-navigation flex">
							<li>
								<a href="google.com">
									Start
								</a>
							</li>
							<li>
								<a href="google.com">
									Categories
								</a>
							</li>
							<li>
								<a href="google.com">
									Language
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</Toolbar>

			<Home />
		</div>
	);
}

export default App;
