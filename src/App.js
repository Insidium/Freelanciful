import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/layout/AppNavBar.js';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<AppNavBar />
				<div className='container'>
					<h1>Hello there!</h1>
				</div>
			</div>
		</Router>
	);
}

export default App;
