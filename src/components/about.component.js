import React, {Component} from 'react';


export default class About extends Component {
	
	render () {

		return <div style={{ display: "inline-block", width: "100%"}}>
			<div style={{ margin: "10px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", boxShadow: '2px 2px 5px #000000' }}>
				<div style={{ padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>About Hell is Others Cheatsheet</h2>
					<br/>
					<p>Hell is Others Cheatsheet providing an overview of the level of the game, highlighting different points of interests. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game.</p>
					<br/>
					<br/>
					<p>Hell is Others Cheatsheet isn’t endorsed by Strelka Games, Yonder and A List Games and doesn’t reflect the views or opinions of Strelka Games, Yonder and A List Games or anyone officially involved in producing or managing Hell is Others.</p>
				</div>
			</div>
		</div>
	}
}
