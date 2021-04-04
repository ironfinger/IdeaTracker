import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

// import { Nav } from 'react-bootstrap/Nav';
// import { Navbar } from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import DashCard from './THUI/Components/DashCard'; 


class App extends Component {

	render() {
		return (
			<div className="App">
				<Container>
					<Row>
						<Col>
							<Card className="Dash ">
								<DashCard />
							</Card>
						</Col>
						<Col>
							<Card className="Dash">
								<h1>Idea</h1>
							</Card>
						</Col>
						<Col>
							<Card>
								<h1>Idea</h1>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<h1>Idea</h1>
							</Card>
						</Col>
						<Col>
							<Card>
								<h1>New Idea?</h1>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

}

export default App;
