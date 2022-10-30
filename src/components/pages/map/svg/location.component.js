import React, {Component} from 'react';



export default class Location extends Component {

    render () {
		return (
			<path 
				d={this.props.location.path}
				fill="transparent"
				stroke="lime"
				strokeWidth="3"
			/>
		);
	}

}

