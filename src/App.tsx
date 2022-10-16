/*
	About: App Component
*/

import * as React from 'react';

// Routing
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Start from "./pages/home/Start";
import Toolbar from "./components/layout/Toolbar";

// Styles
import "./assets/styles/layout.css";

// Example Data
import YouTube from './data/categories/YouTube.json';


// Context
const LibraryContext = React.createContext<LibraryContextType>({ libraryItems: [{ title: 'Hello' }], handleSelectedItem: () => console.log('Hello World') });

// Components
const YouTubeItem = () => {

	const location = useLocation();
	console.log("🚀 ~ file: App.tsx ~ line 32 ~ YouTubeItem ~ location", location)

	// Context
	const { selectedItem, libraryItems, handleSelectedItem } = React.useContext(LibraryContext);

	React.useEffect(() => {
		let index = 0;

		libraryItems.forEach((item, count) => {
			if (location?.pathname.match(item.title)) {
				index = count;
			}
		});

		handleSelectedItem(libraryItems[index]);
	}, []);


	// Props
	// const { title, description, difficulty } = props;
	const title = "Dreaming Spanish";
	const description = "Hello World";
	const difficulty = "super-beginner";

	return (
		<div className="container">
			<h2>{selectedItem?.title}</h2>
			<h4>{difficulty}</h4>
			<p>{description}</p>
		</div>
	)
};

// TODO: State Managemetn


function App() {
	const navigate = useNavigate();

	const libraryItems = YouTube;
	const [selectedItem, setSelectedItem] = React.useState<LibaryItem>(YouTube[0]);

	const handleSelectedItem = (item: LibaryItem) => {
		setSelectedItem(item);
	};




	return (
		<LibraryContext.Provider value={{ libraryItems, selectedItem, handleSelectedItem }}>
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
						<Route path='/youtube/:selectedItem' element={<YouTubeItem />} />
					</Routes>
				</main>
			</div>
		</LibraryContext.Provider>
	);
}

export default App;
