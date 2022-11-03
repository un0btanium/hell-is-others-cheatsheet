import React, {Component} from 'react';

export default class Shop extends Component {
	
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
			<>
				<image
					href="./shop.png"
					x={this.props.shop.x - offset}
					y={this.props.shop.y - offset}
					alt="shop"
				/>
			</>
		);
	}

	isHighlighted() {
		return ["shop", this.props.shop.name.toLowerCase(), ...this.props.shop.tags].some((word) => this.props.searchResults.includes(word));
	}

}

