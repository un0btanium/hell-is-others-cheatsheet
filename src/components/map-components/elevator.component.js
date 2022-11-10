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
			<g
				className="pointerTransparent"
				onClick={() => this.props.addBookmarks("elevator")}
				onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks("elevator") }}
			>
				<image
					href="./icons/icon.png"
					x={this.props.elevator.x - offset}	
					y={this.props.elevator.y - offset}
					alt="elevator-background"
				/>
				<image
					className="invert-colors"
					href={"./icons/Icon_Elevator.png"}
					x={this.props.elevator.x - offset + 7}
					y={this.props.elevator.y - offset + 5}
					height="25px"
					width="25px"
					alt="elevator-icon"
				/>
			</g>
		);
	}

	isHighlighted() {
		return this.props.searchResults.includes("elevator");
	}

}

