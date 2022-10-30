import React, {Component} from 'react';

export default class NPC extends Component {

	constructor(props) {
		super(props);

	}
	
    render () {
		let color = this.isHighlighted() ? "lime" : "black";
		let offsetX = -(this.props.npc.name.length * 8 / 2);
		let offsetY = (this.props.npc.showNameBelow) ? 18 : -10;

		return (
			<>
				<text
					className={'small ' + color}
					x={this.props.npc.location.x+offsetX}
					y={this.props.npc.location.y+offsetY}
				>
					{this.props.npc.name}
				</text>
				<ellipse
					// onMouseEnter={}
					fill={color}
					cx={this.props.npc.location.x}
					cy={this.props.npc.location.y}
					rx={4}
					ry={4}
				/>
			</>
		);
	}

	isHighlighted() {
		let words = [this.props.npc.name.toLowerCase()]
		if (this.props.npc.altName) {
			words.push(this.props.npc.altName);
		}
		
		return words.some(str => this.props.searchResults.includes(str));
	}

}

