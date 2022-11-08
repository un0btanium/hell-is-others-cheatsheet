import React, {Component} from 'react';


export default class Contact extends Component {
	
	render () {
		return <div style={{ display: "inline-block", width: "100%"}}>
			<div style={{ margin: "10px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", boxShadow: '2px 2px 5px #000000' }}>
				<div style={{ padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>Contact</h2>
					<br/>
					<p>Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page <a href="https://github.com/un0btanium/hell-is-others-cheatsheet">here</a>.</p>
					<p>If you want to send me some feedback, feel free to write me an <a href="mailto:unobtaniumlol@gmail.de?subject=Hell%20Is%20Others%20Cheatsheet%20Feedback">eMail</a>.</p>
				</div>
			</div>
		</div>
	}
}