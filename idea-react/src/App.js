import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

// import { Nav } from 'react-bootstrap/Nav';
// import { Navbar } from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';

//import Container from './THUI/Components/Container';
import Card from './THUI/Components/Card';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Container>
					<Card>
						<h1>Hello</h1>
					</Card>
				</Container>
			</div>
		);
	}

}

export default App;
