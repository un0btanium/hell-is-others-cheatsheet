import React, {Component} from 'react';

export default class Elevator extends Component {
	
    render () {
		if (this.props.visibility === 0) {
			return null;
		}

		let highlight = this.isHighlighted();
		if (this.props.visibility === 2 && !highlight) {
			return null;
		}

		let offset = 18;

		return (
			<image
				className="pointer"
				href="elevator.png"
				x={this.props.elevator.x - offset}
				y={this.props.elevator.y - offset}
				alt="elevator"
				onClick={() => this.props.addBookmarks("elevator")}
				onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks("elevator") }}
			/>
		);
	}

	isHighlighted() {
		return this.props.searchResults.includes("elevator");
	}

}

