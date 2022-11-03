import React, {Component} from 'react';

export default class ATM extends Component {
	
    render () {
		if (this.props.visibility === 0) {
			return null;
		}

		let highlight = this.isHighlighted();
		if (this.props.visibility === 2 && !highlight) {
			return null;
		}

		let color = highlight ? "aqua" : "black";
		let shadow = highlight ? " shadow" : " shadow-white";

		let offsetY = (this.props.atm.showNameBelow) ? 18 : -10;

		return (
			<>
				<text textAnchor="middle"
					className={'atm-text ' + color + shadow}
					x={this.props.atm.x}
					y={this.props.atm.y+offsetY}
				>
					ATM
				</text>
				<ellipse
					// onMouseEnter={}
					fill={color}
					cx={this.props.atm.x}
					cy={this.props.atm.y}
					rx={4}
					ry={4}
				/>
			</>
		);
	}

	isHighlighted() {
		return this.props.searchResults.includes("atm");
	}

}

