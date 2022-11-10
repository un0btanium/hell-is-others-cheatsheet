import React, {Component} from 'react';

export default class SVGViewbox extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
    render () {
		return (
			<div
				style={{
					backgroundColor: 'lightpink',
					resize: 'horizontal',
					overflow: 'hidden',
					width: '1190px',
					height: 'auto',
				}}
			>
				<svg
					style={{background: "url('./map-en.png')", backgroundSize: "auto" }}
					width="100%"
					viewBox="0 0 1190 969"
					preserveAspectRatio="xMidYMid meet"
					xmlns="http://www.w3.org/2000/svg"
					onMouseDown={this.printCoordinates}
					id="canvas"
				>
					{this.props.children}
				</svg>
			</div>
			
		);
	}

	printCoordinates(e) {
		var canvas = document.getElementById("canvas");
		var rect = canvas.getBoundingClientRect();
		console.log(Math.floor(e.clientX - rect.left) + "," + Math.floor(e.clientY - rect.top));
	}

}

