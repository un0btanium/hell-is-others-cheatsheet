import React, {Component} from 'react';



export default class CharacterLine extends Component {

	constructor(props) {
		super(props);

		/* connection:
			{
				date: { day, month, year }
				time: 0900  // military time; use this to derive a x position on app startup (see below) (or create a script that transforms it prior, easy to do once code is created)
				coords: {
					start: { x, y },
					end: { x, y }
				},
				characterId: "" // get color from different array (or save character id here, so that we can then based on episode do what needs to be done)
				// two counter for each character: total and for each time
			}

			selected: characterName // if character names align increase the width
			characterColors: { "characterName": "color"} // saves color values
		*/

		const HOUR_IN_PIXEL = 75;


		let pathString = "";
		let i = 0;
		let previousCoords = {};
		let currentCoords;
		for (var element of this.props.character.lines) {
			if (i === 0) {
				currentCoords = {
					x: (element.time/100)*HOUR_IN_PIXEL,
					y: this.props.locations[element.year || previousCoords.year][element.location].y + element.offset,
					year: element.year || previousCoords.year
				};
				switch(element.type) {
					case 'idle':
							pathString += "M " + currentCoords.x + "," + currentCoords.y + "\n";
							previousCoords = { x: currentCoords.x, y: currentCoords.y, year: currentCoords.year };
						break;
					
					case 'arrival':
							if (element.upwards) {
								pathString += "M " + (currentCoords.x-15) + "," + (currentCoords.y+7.5) + "\n";
								pathString += "Q "+ (currentCoords.x-7.5) + "," + currentCoords.y + " " +
													(currentCoords.x) + "," + currentCoords.y + "\n";
													previousCoords = { x: currentCoords.x, y: currentCoords.y, year: currentCoords.year };
							} else {
								pathString += "M " + (currentCoords.x-15) + "," + (currentCoords.y-7.5) + "\n";
								pathString += "Q "+ (currentCoords.x-7.5) + "," + currentCoords.y + " " +
													(currentCoords.x) + "," + currentCoords.y + "\n";
													previousCoords = { x: currentCoords.x, y: currentCoords.y, year: currentCoords.year };
							}
						break;
					
					default:
						console.error("Unknown starting connection " + element.type)
						break;
				}

			} else {
				if (((element.time/100)*HOUR_IN_PIXEL) !== previousCoords.x) {
					currentCoords = { x: ((element.time/100)*HOUR_IN_PIXEL), y: previousCoords.y };
					pathString += "L " + currentCoords.x + "," + currentCoords.y + "\n";
					previousCoords = { x: currentCoords.x, y: currentCoords.y, year: previousCoords.year };
				}
				switch(element.type) {
					case 'idle':
							currentCoords = { x: ((element.time/100)*HOUR_IN_PIXEL), y: previousCoords.y };
							pathString += "L " + currentCoords.x + "," + currentCoords.y + "\n";
							previousCoords = { x: currentCoords.x, y: currentCoords.y, year: previousCoords.year };
						break;

					case 'timetravel':
							currentCoords = { x: previousCoords.x, y: this.props.locations[element.year][element.location].y + element.offset };
							pathString += "L " + currentCoords.x + "," + currentCoords.y + "\n";
							previousCoords = { x: currentCoords.x, y: currentCoords.y, year: element.year };
						break;

					case 'travel':
							let distance = 50*(Math.min(100, Math.abs(this.props.locations[previousCoords.year][element.location].y-previousCoords.y))/100);
							currentCoords = { x: ((element.time/100)*HOUR_IN_PIXEL)+distance+element.offset, y: this.props.locations[previousCoords.year][element.location].y + element.offset };
							// let a = Math.abs(currentCoords.y-previousCoords.y)/100;
							let a = 0;
							pathString += "C "+ (currentCoords.x+a) + "," + (previousCoords.y-a) + " " +
												(previousCoords.x-a) + "," + (currentCoords.y+a) + " " +
												currentCoords.x + "," + currentCoords.y + "\n";
							previousCoords = { x: currentCoords.x, y: currentCoords.y, year: previousCoords.year };
						break;

					case 'exit':
							if (element.downwards) {
								currentCoords = { x: previousCoords.x+15, y: previousCoords.y+7.5 };
							} else {
								currentCoords = { x: previousCoords.x+15, y: previousCoords.y-7.5 };
							}
							pathString += "Q "+ (currentCoords.x-7.5) + "," + (previousCoords.y) + " " +
												currentCoords.x + "," + currentCoords.y + "\n";
							previousCoords = { x: currentCoords.x, y: currentCoords.y, year: previousCoords.year };

						break;
			
					default:
						console.error("Unknown type " + element.type);
						break;
							
				}
			}
			i++;
		}

		console.log(pathString)

		this.state = {
			pathString: pathString,
			color: "#D500F9"
		}
	}
	
    render () {

		return (
			<path
				d={this.state.pathString}
				fill="none"
				stroke={this.props.color}
				strokeWidth={this.props.character.name === this.props.hoveredCharacter? 6 : 4}
				onMouseEnter={() => this.props.onCharacterHover(this.props.character.name)}
				onMouseLeave={() => this.props.onCharacterHover(undefined)}
				// onMouseEnter={() => this.setState({ width: 6})}
				// onMouseLeave={() => this.setState({ width: 4})}
			/>
		);
	}

}

