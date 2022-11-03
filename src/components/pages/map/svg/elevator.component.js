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
				href="elevator.png"
				x={this.props.elevator.x - offset}
				y={this.props.elevator.y - offset}
				alt="elevator"
			/>
		);
	}

	isHighlighted() {
		return ["elevator", "door", "exit"].some((word) => this.props.searchResults.includes(word));
	}

}

