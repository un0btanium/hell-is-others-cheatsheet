import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import { ToggleButton, ToggleButtonGroup, Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

export default class SideBar extends Component {

	constructor(props) {
		super(props);

		this.addBookmarks = this.addBookmarks.bind(this);
		this.onSearchFieldChange = this.onSearchFieldChange.bind(this);

		this.state = {
			searchValue: ""
		}
	}
	
	render () {
		let bookmarks = this.props.bookmarks.map((bookmark, i) => {
			return (
				<div
					className="pointer"
					key={"bookmark-"+i}
					style={{
						padding: "3px",
						maxHeight: "30px",
						margin: "0px 0px 0px 15px",
						color: bookmark.disabled ? "grey" : "white"
					}}
				>
					<FontAwesomeIcon
						style={{marginRight: "5px"}}
						icon={faTrashCan}
						onClick={() => this.props.deleteBookmarks(bookmark.name)}
					/>
					{
						bookmark.disabled
						?
						<FontAwesomeIcon
							style={{marginRight: "5px"}}
							icon={faCheckSquare}
							onClick={() => this.props.switchBookmarks(bookmark.name)}
						/>
						: 
						<FontAwesomeIcon
							style={{marginRight: "5px"}}
							icon={faSquare}
							onClick={() => this.props.switchBookmarks(bookmark.name)}
						/>
					}
					<div
						style={{display: "inline-block"}}
						onClick={() => this.props.switchBookmarks(bookmark.name)}
						onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks(bookmark.name) }}
					>
						{bookmark.name}
					</div>
				</div>
			)
		});

		let labelStyle = {
			padding: "3px 3px 3px 3px",
			minWidth: "85px",
			textAlign: "left",
			fontWeight: 700,
			lineHeight: "16px"
		}

		let buttonStyle = {
			lineHeight: "12px",
			height: "32px"
		}

		return (
			<div style={{marginTop: "15px", padding: "10px"}}>
				<Form
					onSubmit={this.addBookmarks}
					style={{marginBottom: "20px"}}
				>
					<Form.Control
						autoFocus
						placeholder={this.props.placeholder}
						onChange={(e) => this.onSearchFieldChange(e)}
						value={this.state.searchValue}
						variant="warning" 
					/>
					<Dropdown
						focusFirstItemOnShow={'keyboard'}
						show={this.props.searchResults.length > 0}
						style={{width: "100%"}}
					>
						<Dropdown.Menu variant={"dark"}>
							{this.props.searchResults.map((word, i) => {
								return (
									<Dropdown.Item style={{display: "inline-block"}} key={"dropdown-item-" + i} onClick={() => this.props.addBookmarks(word)}>{word}</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</Form>
				<ToggleButtonGroup
					style={{ width: "100%", marginBottom: "5px" }}
					type="radio"
					name="npc-visibility"
					defaultValue={this.props.settings.showNPCs}
					onChange={(value) => this.props.onChangeSettings("showNPCs", value)}
				>
					<Form.Label className="hio-font" style={labelStyle}>
						NPCs
					</Form.Label>
					<ToggleButton variant="success" style={buttonStyle} id="npc-1" value={1} >
						Always
					</ToggleButton>
					<ToggleButton variant="success" style={buttonStyle} id="npc-2" value={2}>
						On Search
					</ToggleButton>
					<ToggleButton variant="success" style={buttonStyle} id="npc-0" value={0}>
						Never
					</ToggleButton>
				</ToggleButtonGroup>
				<ToggleButtonGroup
					style={{ width: "100%", marginBottom: "5px" }}
					type="radio"
					name="atm-visibility"
					defaultValue={this.props.settings.showATMs}
					onChange={(value) => this.props.onChangeSettings("showATMs", value)}
				>
					<Form.Label className="hio-font" style={labelStyle}>
						ATMs
					</Form.Label>
					<ToggleButton id="atm-1" style={buttonStyle} value={1}>
						Always
					</ToggleButton>
					<ToggleButton id="atm-2" style={buttonStyle} value={2}>
						On Search
					</ToggleButton>
					<ToggleButton id="atm-0" style={buttonStyle} value={0}>
						Never
					</ToggleButton>
				</ToggleButtonGroup>
				<ToggleButtonGroup
					style={{ width: "100%", marginBottom: "5px" }}
					type="radio"
					name="location-visibility"
					defaultValue={this.props.settings.showLocations}
					onChange={(value) => this.props.onChangeSettings("showLocations", value)}
				>
					<Form.Label className="hio-font" style={labelStyle}>
						Locations
					</Form.Label>
					{/* <ToggleButton variant="warning" style={buttonStyle} id="location-1" value={1}>
						Always
					</ToggleButton> */}
					<ToggleButton variant="warning" style={buttonStyle} id="location-2" value={2}>
						On Search
					</ToggleButton>
					<ToggleButton variant="warning" style={buttonStyle} id="location-0" value={0}>
						Never
					</ToggleButton>
				</ToggleButtonGroup>
				<ToggleButtonGroup
					style={{ width: "100%", marginBottom: "5px" }}
					type="radio"
					name="elevator-visibility"
					defaultValue={this.props.settings.showElevators}
					onChange={(value) => this.props.onChangeSettings("showElevators", value)}
				>
					<Form.Label className="hio-font" style={labelStyle}>
						Elevators
					</Form.Label>
					<ToggleButton variant="secondary" style={buttonStyle} id="elevator-1" value={1}>
						Always
					</ToggleButton>
					<ToggleButton variant="secondary" style={buttonStyle} id="elevator-2" value={2}>
						On Search
					</ToggleButton>
					<ToggleButton variant="secondary" style={buttonStyle} id="elevator-0" value={0}>
						Never
					</ToggleButton>
				</ToggleButtonGroup>
				<ToggleButtonGroup
					style={{ width: "100%", marginBottom: "5px" }}
					type="radio"
					name="shops-visibility"
					defaultValue={this.props.settings.showShops}
					onChange={(value) => this.props.onChangeSettings("showShops", value)}
				>
					<Form.Label className="hio-font" style={labelStyle}>
						Shops
					</Form.Label>
					<ToggleButton variant="secondary" style={buttonStyle} id="shop-1" value={1}>
						Always
					</ToggleButton>
					<ToggleButton variant="secondary" style={buttonStyle} id="shop-2" value={2}>
						On Search
					</ToggleButton>
					<ToggleButton variant="secondary" style={buttonStyle} id="shop-0" value={0}>
						Never
					</ToggleButton>
				</ToggleButtonGroup>
				<div>
					<div style={{ fontWeight: 900, marginTop: "10px" }}>
						<FontAwesomeIcon
							style={{marginRight: "5px"}}
							icon={faTrashCan}
							onClick={() => this.props.deleteBookmarks()}
						/>
						<FontAwesomeIcon
							style={{marginRight: "5px"}}
							icon={faCheckSquare}
							onClick={() => this.props.switchBookmarks()}
						/>
						Bookmarks
					</div>
					<div>
						{bookmarks}
					</div>
				</div>
			</div>
		);
	}

	onSearchFieldChange(e) {
		this.setState({ searchValue: e.target.value });
		this.props.onSearchFieldChange(e.target.value);
	}

	addBookmarks(e) {
		e.preventDefault();
		this.props.addBookmarks();
		this.setState({ searchValue: "" });
	}
}