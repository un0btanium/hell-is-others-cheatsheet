import React, {Component} from 'react';

export default class NPC extends Component {
	
    render () {
		if (this.props.visibility === 0) {
			return null;
		}

		let highlight = this.isHighlighted();
		if (this.props.visibility === 2 && !highlight) {
			return null;
		}

		let color = highlight ? "lawngreen" : "black";
		let shadow = highlight ? " shadow" : " shadow-white";
		let offsetY = (this.props.npc.showNameBelow) ? 18 : -10;

		// TODO https://stackoverflow.com/questions/15500894/background-color-of-text-in-svg
		return (
			<>
				<text textAnchor="middle"
					className={'npc-text pointer ' + color + shadow}
					x={this.props.npc.location.x}
					y={this.props.npc.location.y+offsetY}
					onClick={() => this.props.addBookmarks(this.props.npc.name)}
					onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks(this.props.npc.name) }}
				>
					{this.props.npc.name}
				</text>
				<ellipse
					className="pointer"
					fill={color}
					cx={this.props.npc.location.x}
					cy={this.props.npc.location.y}
					rx={4}
					ry={4}
					onClick={() => this.props.addBookmarks(this.props.npc.name)}
					onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks(this.props.npc.name) }}
				/>
			</>
		);
	}

	isHighlighted() {
		let words = [this.props.npc.name.toLowerCase()]
		if (this.props.npc.altName) {
			words.push(this.props.npc.altName.toLowerCase());
		}
		
		return words.some(str => this.props.searchResults.includes(str));
	}

}

