import React, {Component} from 'react';

import SVGViewbox from './map-components/svg-viewbox.component';
import NPC from './map-components/npc.component';
import Location from './map-components/location.component';
import ATM from './map-components/atm.component';
import Shop from './map-components/shop.component';
import Elevator from './map-components/elevator.component';

export default class Map extends Component {

	render () {
		let npcs = this.props.npcs.map(npc => {
			return (
				<NPC
					npc={npc}
					searchResults={this.props.searchResults}
					visibility={this.props.settings.showNPCs}
					addBookmark={this.props.addBookmark}
					deleteBookmark={this.props.deleteBookmark}
					key={"npc-" + npc.name}
				/>
			);
		});
		
		let locations = this.props.locations.map(location => {
			return (
				<Location
					location={location}
					searchResults={this.props.searchResults}
					visibility={this.props.settings.showLocations}
					addBookmark={this.props.addBookmark}
					deleteBookmark={this.props.deleteBookmark}
					key={"location-" + location.name}
				/>
			);
		});

		let atms = this.props.atms.map((atm, i) => {
			return (
				<ATM
					atm={atm}
					searchResults={this.props.searchResults}
					visibility={this.props.settings.showATMs}
					addBookmark={this.props.addBookmark}
					deleteBookmark={this.props.deleteBookmark}
					key={"atm-" + i}
				/>
			)
		});

		let elevators = this.props.elevators.map((elevator, i) => {
			return (
				<Elevator
					elevator={elevator}
					searchResults={this.props.searchResults}
					visibility={this.props.settings.showElevators}
					addBookmark={this.props.addBookmark}
					deleteBookmark={this.props.deleteBookmark}
					key={"elevator-" + i}
				/>
			)
		});

		let shops = this.props.shops.map((shop, i) => {
			return (
				<Shop
					shop={shop}
					searchResults={this.props.searchResults}
					visibility={this.props.settings.showShops}
					addBookmark={this.props.addBookmark}
					deleteBookmark={this.props.deleteBookmark}
					key={"shop-" + i}
				/>
			)
		});

		return (
			<SVGViewbox>
				{locations}
				{elevators}
				{shops}
				{atms}
				{npcs}
			</SVGViewbox>
		);
	}
}