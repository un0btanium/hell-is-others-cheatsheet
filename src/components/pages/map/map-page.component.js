import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import SVGViewbox from './svg/svg-viewbox.component';
import NPC from './svg/npc.component';
import Location from './svg/location.component';

export default class MapPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchResults: [],
			placeholder: this.getPlaceholder()
		};
	}
	
	render () {

		let npcs = this.props.npcs.map((npc, i) => {
			return (
				<NPC
					npc={npc}
					searchResults={this.state.searchResults}
					key={"npc-"+npc.name}
				/>
			);
		});
		
		let locations = [];
		this.props.locations.forEach(location => {
			console.log(location.name)
			if (this.state.searchResults.includes(location.name.toLowerCase())) {
				locations.push(
					<Location
						location={location}
						key={"location-"+location.name}
					/>
				);
			}
		});


		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px", marginTop: "0px", maxWidth:"100000px"}}>
					<Row>
						<Col md="3" style={{ textAlign:"center" }}>
							<Form.Control type="email" placeholder={this.state.placeholder} onChange={(e) => this.onSearchFieldChange(e)} defaultValue="Ven"/>
						</Col>
						<Col md="9" style={{ textAlign:"center" }}>
							<SVGViewbox>
								{npcs}
								{locations}
							</SVGViewbox>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	}

	getPlaceholder() {
		console.log(this.props)
		if (Math.random() < 0.5) {
			return this.props.npcs[Math.floor(Math.random() * this.props.npcs.length)].name
		}
		return this.props.locations[Math.floor(Math.random() * this.props.locations.length)].name
	}

	onSearchFieldChange(e) {
		if(e.target.value === '') {
			this.setState({
				searchResults: []
			});
			return;
		}
		
		this.props.radixTree.getWords(e.target.value).then((searchResults) => {
			console.log(searchResults)
			this.setState({
				searchResults: searchResults
			});
		});
	}

}