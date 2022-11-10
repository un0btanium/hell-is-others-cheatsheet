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
			<g
				className="pointerTransparent"
				onClick={() => this.props.addBookmarks(this.props.shop.name)}
				onContextMenu={(e) => { e.preventDefault(); this.props.deleteBookmarks(this.props.shop.name) }}
			>
				<image
					href="./icons/icon.png"
					x={this.props.shop.x - offset}	
					y={this.props.shop.y - offset}
					alt="shop-background"
				/>
				<image
					className="invert-colors"
					href={this.props.shop.img}
					x={this.props.shop.x - offset + 6}
					y={this.props.shop.y - offset + 6}
					height="25px"
					width="25px"
					alt="shop-icon"
				/>
			</g>
		);
	}

	isHighlighted() {
		return ["shop", this.props.shop.name.toLowerCase(), ...this.props.shop.tags].some((word) => this.props.searchResults.includes(word));
	}

}

