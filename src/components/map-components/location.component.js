import React, {Component} from 'react';

export default class Location extends Component {

	constructor(props) {
		super(props);

		this.addBookmarks = this.addBookmarks.bind(this);
		this.deleteBookmarks = this.deleteBookmarks.bind(this);
	}

    render () {
		if (this.props.visibility === 0) {
			return null;
		}

		let highlight = this.isHighlighted();
		if (this.props.visibility === 2 && !highlight) {
			return null;
		}

		return (
			<>
				<path 
					className="shadow pointer"
					d={this.props.location.path}
					fill="transparent"
					stroke="orange"
					strokeWidth="3"
					onClick={this.addBookmarks}
					onContextMenu={this.deleteBookmarks}
				/>
				{/* <text
					className={"location-text orange shadow" + (this.props.location.vertical ? " text-vertical" : "")}
					textAnchor="middle"
					x={this.props.location.x}
					y={this.props.location.y}
					style={ (this.props.location.size) ? { fontSize: this.props.location.size } : {} }
				>
					{this.props.location.name}
				</text> */}
			</>
		);
	}
	
	isHighlighted() {
		return (this.props.location.name && this.props.searchResults.includes(this.props.location.name.toLowerCase()))
			|| (this.props.location.tags && this.props.location.tags.some((tag) => this.props.searchResults.includes(tag)));
	}

	addBookmarks() {
		let newBookmarks = []
		if (this.props.location.name) {
			newBookmarks.push(this.props.location.name);
		}
		if (this.props.location.tags) {
			this.props.location.tags.forEach((tag) => newBookmarks.push(tag));
		}
		this.props.addBookmarks(newBookmarks);
	}

	deleteBookmarks(e) {
		e.preventDefault();

		let toDeleteBookmarks = []
		if (this.props.location.name) {
			toDeleteBookmarks.push(this.props.location.name);
		}
		if (this.props.location.tags) {
			this.props.location.tags.forEach((tag) => toDeleteBookmarks.push(tag));
		}
		this.props.deleteBookmarks(toDeleteBookmarks);
	}
}
