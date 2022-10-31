import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

import SVGViewbox from './svg/svg-viewbox.component';
import NPC from './svg/npc.component';
import Location from './svg/location.component';
import ATM from './svg/atm.component';

export default class MapPage extends Component {

	constructor(props) {
		super(props);

		let defaultSettings = JSON.stringify({
			showLocations: 2,
			showNPCs: 1,
			showATMs: 1
		});
		let settings = JSON.parse(localStorage.getItem('settings') || defaultSettings);

		this.state = {
			searchResults: [],
			placeholder: this.getPlaceholder(),
			settings: settings
		};
	}
	
	render () {
		let npcs = this.props.npcs.map(npc => {
			return (
				<NPC
					npc={npc}
					searchResults={this.state.searchResults}
					visibility={this.state.settings.showNPCs}
					key={"npc-" + npc.name}
				/>
			);
		});
		
		let locations = this.props.locations.map(location => {
			return (
				<Location
					location={location}
					searchResults={this.state.searchResults}
					visibility={this.state.settings.showLocations}
					key={"location-" + location.name}
				/>
			);
		});

		let atms = this.props.atms.map((atm, i) => {
			return (
				<ATM
					atm={atm}
					searchResults={this.state.searchResults}
					visibility={this.state.settings.showATMs}
					key={"atm-" + i}
				/>
			)
		});

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "5px 0px 0px 0px" }}>
				<Container style={{ padding:"0", margin:"0 20px 0 20px", maxWidth:"100000px"}}>
					<Row>
						<Col md="3" style={{ textAlign:"center", marginTop: "50px", maxWidth: "500px" }}>
							<Form.Control
								type="email"
								placeholder={this.state.placeholder}
								onChange={(e) => this.onSearchFieldChange(e)}
								style={{marginBottom: "10px"}}
							/>
							<ToggleButtonGroup
								style={{ width: "100%", marginBottom: "5px" }}
								type="radio"
								name="npc-visibility"
								defaultValue={this.state.settings.showNPCs}
								onChange={(value) => this.onChangeSettings("showNPCs", value)}
							>
								<ToggleButton variant="success" id="npc-1" value={1}>
									Always
								</ToggleButton>
								<ToggleButton variant="success" id="npc-2" value={2}>
									On Search
								</ToggleButton>
								<ToggleButton variant="success" id="npc-0" value={0}>
									Never
								</ToggleButton>
							</ToggleButtonGroup>
							<ToggleButtonGroup
								style={{ width: "100%", marginBottom: "5px" }}
								type="radio"
								name="atm-visibility"
								defaultValue={this.state.settings.showATMs}
								onChange={(value) => this.onChangeSettings("showATMs", value)}
							>
								<ToggleButton id="atm-1" value={1}>
									Always
								</ToggleButton>
								<ToggleButton id="atm-2" value={2}>
									On Search
								</ToggleButton>
								<ToggleButton id="atm-0" value={0}>
									Never
								</ToggleButton>
							</ToggleButtonGroup>
							<ToggleButtonGroup
								style={{ width: "100%" }}
								type="radio"
								name="location-visibility"
								defaultValue={this.state.settings.showLocations}
								onChange={(value) => this.onChangeSettings("showLocations", value)}
							>
								{/* <ToggleButton variant="warning" id="location-1" value={1}>
									Always
								</ToggleButton> */}
								<ToggleButton variant="warning" id="location-2" value={2}>
									On Search
								</ToggleButton>
								<ToggleButton variant="warning" id="location-0" value={0}>
									Never
								</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="9" style={{ textAlign:"center" }}>
							<SVGViewbox>
								{npcs}
								{locations}
								{atms}
							</SVGViewbox>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	}

	getPlaceholder() {
		let num = Math.random();
		if (num < 0.4) {
			return this.props.npcs[Math.floor(Math.random() * this.props.npcs.length)].name
		} else if (num > 0.6) {
			return this.props.locations[Math.floor(Math.random() * this.props.locations.length)].name
		}
		return "ATM";
	}

	onSearchFieldChange(e) {
		if(e.target.value === '') {
			this.setState({
				searchResults: []
			});
			return;
		}
		
		this.props.radixTree.getWords(e.target.value).then((searchResults) => {
			this.setState({
				searchResults: searchResults
			});
		});
	}

	onChangeSettings(setting, value) {
		let settings = {...this.state.settings};
		settings[setting] = value;
		localStorage.setItem('settings', JSON.stringify(settings));
		this.setState({settings});
	}

}