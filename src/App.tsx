/*
	About: App Component
*/

import * as React from 'react';

// Routing
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Start from "./pages/start/Start";
import LibraryItem from "./pages/LibraryItem";
import Toolbar from "./components/layout/Toolbar";

// Styles
import "./assets/styles/layout.css";

// Context
import LibraryProvider from './context/LibraryContext';



function App() {
	const navigate = useNavigate();


	return (
		<LibraryProvider>
			<div>
				<Toolbar>
					<header className="app-toolbar primary-header flex">
						<div className="primary-logo">
							<h1 className="primary-title disable-gutters" onClick={() => navigate('/')}>
								LangZip
							</h1>
						</div>
						<div style={{ flexGrow: 1 }} />
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
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/start' element={<Start />} />
						<Route path='/categories' element={<p>Categories Page</p>} />
						<Route path='/youtube/:selectedItem' element={<LibraryItem />} />
					</Routes>
				</main>
			</div>
		</LibraryProvider>
	);
}

export default App;
