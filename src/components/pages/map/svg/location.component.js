import React, {Component} from 'react';



export default class Location extends Component {

    render () {
		if (this.props.visibility === 0) {
			return null;
		}

		let highlight = this.isHighlighted();
		if (this.props.visibility === 2 && !highlight) {
			return null;
		}

		return (
			<path 
				className="shadow"
				d={this.props.location.path}
				fill="transparent"
				stroke="orange"
				strokeWidth="3"
			/>
		);
	}
	
	isHighlighted() {
		return this.props.searchResults.includes(this.props.location.name.toLowerCase())
	}
}
