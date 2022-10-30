import React, {Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export default class MapPage extends Component {
	
	render () {

		// TODO search bar (random placeholder texts to show user whats possible to search for, e.g. NPC names, buildings, tags, items, areas where specific items or item types are)

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px", marginTop: "0px", maxWidth:"100000px"}}>
					<Row>
						<Col style={{ textAlign:"center" }}>
							<b>Leftclick: Select/Unselect Evidence.<br/>Rightclick: Ignore/Unignore Evidence.</b>
						</Col>
					</Row>
					<Row>
						<Col>
							
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	}

}