import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MapPage from './components/pages/map/map-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';

import data from './data/data.js';

import logo from './logo.svg';
import './App.css';
import RadixTree from './radix/radixTree';

const WEBSITE_URL = "un0btanium.github.io/hell-is-others-cheatsheet/";

const PATCH_VERSION = data.patchVersion;

class App extends Component {

	constructor(props) {
		super(props);

		let radixTree = new RadixTree();
		data.npcs.forEach((npc) => {
			radixTree.addWord(npc.name);
			if (npc.altName) {
				radixTree.addWord(npc.altName);
			}
			npc.location.address.forEach((address) => {
				radixTree.addWord(address);
			});
		});
		data.locations.forEach(location => {
			radixTree.addWord(location.name);
		})
		radixTree.addWord("atm");

		this.state = {
			npcs: data.npcs,
			locations: data.locations,
			atms: data.atms,
			radixTree: radixTree
		};
	}
	
	render() {
		return (
			<BrowserRouter>
				<div className="full-screenable-node">
					<Navbar bg="dark" variant="dark" expand="xl" style={{ boxShadow: '0px 2px 5px #000000' }}>
						<Navbar.Brand style={{ marginLeft: "15%" }}>
							<a href={"http://" + WEBSITE_URL}>
								<img src={logo} width="35" height="35" alt="Logo" />
								<b>{' Hell is Others Cheatsheet'}</b>
							</a>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%" }}>
							<Nav className="mr-auto">
								<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/map"><b>Map</b></Nav.Link>
							</Nav>

							<Nav>
								<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/about"><b>About</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/contact"><b>Contact</b></Nav.Link>
								<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px" }}><b>Patch <i>{PATCH_VERSION}</i></b></Navbar.Text>
								{/* <Form inline style={{marginLeft: "20px"}}><Form.Check id="toggleIsFullScreen" type="checkbox" className="custom-switch" custom="true" label="Go Fullscreen" checked={this.state.isFullScreen} onChange={(e) => this.toggleSetting("isFullScreen")} /></Form> */}
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Routes>
						<Route path="/hell-is-others-cheatsheet/" element={ <Navigate to="/hell-is-others-cheatsheet/map" />} />
						<Route path="/hell-is-others-cheatsheet/map" element={<MapPage {...this.state} />} />
						<Route path="/hell-is-others-cheatsheet/about" element={<AboutPage />} />
						<Route path="/hell-is-others-cheatsheet/contact" element={<ContactPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	}

}

export default App;
