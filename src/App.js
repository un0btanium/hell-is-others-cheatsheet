import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Map from './components/map.component';
import Sidebar from './components/sidebar.component';
import About from './components/about.component';
import Contact from './components/contact.component';

import data from './data/data.js';
import RadixTree from './radix/radixTree';

import logo from './hiologo.png';
const PATCH_VERSION = data.patchVersion;

class App extends Component {

	constructor(props) {
		super(props);

		this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
		this.onChangeSettings = this.onChangeSettings.bind(this);
		this.addBookmark = this.addBookmark.bind(this);
		this.addBookmarks = this.addBookmarks.bind(this);
		this.deleteBookmark = this.deleteBookmark.bind(this);
		this.deleteAllBookmarks = this.deleteAllBookmarks.bind(this);
		this.switchBookmark = this.switchBookmark.bind(this);
		this.switchAllBookmarks = this.switchAllBookmarks.bind(this);

		let bookmarks = this.getInitialBookmarks();

		this.state = {
			...data,
			radixTree: this.getInitialRadixTree(),
			settings: this.getInitialSettings(),
			placeholder: this.getPlaceholder(data),
			searchResults: [],
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, []),
			bookmarks: bookmarks
		};
	}

	getInitialRadixTree() {
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
		});

		data.shops.forEach(shop => {
			radixTree.addWord(shop.name);
			shop.tags.forEach(tag => {
				radixTree.addWord(tag);
			});
		});

		radixTree.addWord("atm");
		radixTree.addWord("elevator");
		radixTree.addWord("shop");

		return radixTree;
	}

	getInitialSettings() {
		let defaultSettings = {
			showLocations: 2,
			showNPCs: 1,
			showATMs: 1,
			showShops: 2,
			showElevators: 2
		};
		let loadedSettings = JSON.parse(localStorage.getItem('settings') || "{}");
		return { ...defaultSettings, ...loadedSettings};
	}
	
	getInitialBookmarks() {
		return JSON.parse(localStorage.getItem('bookmarks') || "[]").sort((a,b) => a.name.localeCompare(b.name));
	}

	getPlaceholder(data) {
		let num = Math.random();
		if (num < 0.2) {
			return data.npcs[Math.floor(Math.random() * data.npcs.length)].name
		} else if (num < 0.4) {
			return data.locations[Math.floor(Math.random() * data.locations.length)].name
		} else if (num < 0.6) {
			return data.shops[Math.floor(Math.random() * data.shops.length)].name
		} else if (num < 0.8) {
			return "Elevators";
		}
		return "ATM";
	}
	
	getSearchResultsPlusBookmarks(bookmarks, searchResults) {
		let searchResultPlusBookmarks = [...searchResults];
		bookmarks.forEach(bookmark => {
			if (bookmark.disabled) {
				return;
			}

			if (searchResultPlusBookmarks.includes(bookmark.name)) {
				return;
			}

			searchResultPlusBookmarks.push(bookmark.name);
		});
		return searchResultPlusBookmarks;
	}
	
	render() {
		return (
			<Container style={{ padding:"0", margin:"0"}}>
				<Row style={{margin: "0"}}>
					<Col style={{ padding: "0", minWidth: "400px" }} sm="12" md="5">
						<BrowserRouter>
							<Navbar bg="dark" variant="dark" expand="never" style={{ boxShadow: '0px 2px 5px #000000' }}>
								<Navbar.Brand style={{ margin: "auto" }}>
									<div>
										<img src={logo} width="auto" height="50px" alt="Logo" />
										<b style={{marginLeft: "10px", color: "red"}}>{' Cheatsheet'}</b>
									</div>
								</Navbar.Brand>

								<Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight: "10px"}}/>
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav style={{ padding: "30px"}}>
										<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/map"><b>Search</b></Nav.Link>
										<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/about"><b>About</b></Nav.Link>
										<Nav.Link as={Link} variant="light" to="/hell-is-others-cheatsheet/contact"><b>Contact</b></Nav.Link>
										<Navbar.Text style={{ color: "rgb(223, 105, 26)" }}><b>Patch {PATCH_VERSION}</b></Navbar.Text>
									</Nav>
								</Navbar.Collapse>
							</Navbar>

							<Routes>
								<Route path="/hell-is-others-cheatsheet/" element={ <Navigate to="/hell-is-others-cheatsheet/map" />} />
								<Route path="/hell-is-others-cheatsheet/map" element={
									<Sidebar
										bookmarks={this.state.bookmarks}
										settings={this.state.settings}
										placeholder={this.state.placeholder}
										onSearchFieldChange={this.onSearchFieldChange}
										onChangeSettings={this.onChangeSettings}
										addBookmarks={this.addBookmarks}
										deleteBookmark={this.deleteBookmark}
										deleteAllBookmarks={this.deleteAllBookmarks}
										switchBookmark={this.switchBookmark}
										switchAllBookmarks={this.switchAllBookmarks}
									/>}
								/>
								<Route path="/hell-is-others-cheatsheet/about" element={<About />} />
								<Route path="/hell-is-others-cheatsheet/contact" element={<Contact />} />
							</Routes>
						</BrowserRouter>
					</Col>
					<Col sm="12" md="7" style={{ padding: "0" }}>
						<Map
							settings={this.state.settings}
							searchResults={this.state.searchResultPlusBookmarks}
							npcs={this.state.npcs}
							atms={this.state.atms}
							locations={this.state.locations}
							elevators={this.state.elevators}
							shops={this.state.shops}
							addBookmark={this.addBookmark}
							deleteBookmark={this.deleteBookmark}
						/>
					</Col>
				</Row>
			</Container>
		);
	}

	onSearchFieldChange(text) {
		if(text === '') {
			this.setState({
				searchResults: [],
				placeholder: this.getPlaceholder(this.state),
				searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(this.state.bookmarks, [])
			});
			return;
		}
		
		this.state.radixTree.getWords(text).then((searchResults) => {
			this.setState({
				searchResults: searchResults,
				searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(this.state.bookmarks, searchResults)
			});
		});
	}

	onChangeSettings(setting, value) {
		let settings = {...this.state.settings};
		settings[setting] = value;
		
		localStorage.setItem('settings', JSON.stringify(settings));

		this.setState({settings});
	}

	addBookmark(word) {
		word = word.toLowerCase();
		let bookmarks = [...this.state.bookmarks];
		for (let bookmark of bookmarks) {
			if (bookmark.name === word) {
				this.switchBookmark(word);
				return;
			}
		}

		bookmarks.push({
			name: word
		});

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		
		this.setState({
			bookmarks: bookmarks.sort((a,b) => a.name.localeCompare(b.name)),
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, this.state.searchResults)
		});
	}

	addBookmarks() {
		let bookmarks = this.state.searchResults.map((word) => ({ name: word })); // re-enables existing disabled bookmarks

		this.state.bookmarks.forEach((existingBookmark) => { // add remaining existing bookmarks
			for (let bookmark of bookmarks) {
				if (bookmark.name === existingBookmark.name) {
					return;
				}
			}
			bookmarks.push(existingBookmark);
		});

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

		this.setState({
			searchResults: [],
			bookmarks: bookmarks.sort((a,b) => a.name.localeCompare(b.name)),
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, []),
			placeholder: this.getPlaceholder(this.state)
		});
	}

	deleteBookmark(name) {
		name = name.toLowerCase();
		let bookmarks = this.state.bookmarks.filter(bookmark => bookmark.name !== name);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		this.setState({
			bookmarks: bookmarks,
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, this.state.searchResults)
		});
	}

	deleteAllBookmarks() {
		localStorage.setItem('bookmarks', JSON.stringify([]));
		this.setState({
			bookmarks: [],
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks([], this.state.searchResults)
		});
	}

	switchBookmark(name) {
		let bookmarks = this.state.bookmarks.map(bookmark => {
			if (bookmark.name === name) {
				bookmark = {
					name: name,
					disabled: !bookmark.disabled
				}
			}
			return bookmark;
		});

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

		this.setState({
			bookmarks: bookmarks,
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, this.state.searchResults)
		});
	}

	switchAllBookmarks() {
		if (this.state.bookmarks.length === 0) {
			return;
		}

		let hasDisabled = this.state.bookmarks.some(bookmark => bookmark.disabled);
		let hasEnabled = this.state.bookmarks.some(bookmark => !bookmark.disabled);
		let allEnabled = !hasDisabled && hasEnabled;

		let bookmarks = (allEnabled)
			? this.state.bookmarks.map(bookmark => ({ name: bookmark.name, disabled: true }))
			: this.state.bookmarks.map(bookmark => ({ name: bookmark.name }));
		
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

		this.setState({
			bookmarks: bookmarks,
			searchResultPlusBookmarks: this.getSearchResultsPlusBookmarks(bookmarks, this.state.searchResults)
		});
	}
}

export default App;
