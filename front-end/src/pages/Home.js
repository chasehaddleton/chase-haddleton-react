import React, {Component} from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import Content from "../components/Content";
import {staticContentURI} from "../components/Config";

class Home extends Component {
	constructor(props) {
		super(props);

		let ageDifMs = Date.now() - new Date("1998-06-02");
		let ageDate = new Date(ageDifMs);
		this.state = {
			age: Math.abs(ageDate.getUTCFullYear() - 1970)
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	
	render() {
		let resumeURI = staticContentURI + "/files/chase-haddleton-resume.pdf";
		return (
			<Card id="idCard">
				<div id="left">
					<p/>
				</div>
				<div id="right">
					<Content>
						<h2>Hi, I'm Chase Haddleton</h2>
						<p>I am a {this.state.age} year old Toronto based software developer. Five words to describe myself
						   would be; leadership oriented, constant learner, and driven. I enjoy challenges and love applying my
						   knowledge to solving complex problems in unique and innovative ways.
						</p>
						<p>
							I am knowledgeable in Java, C++, JS, and React. I have a passion for architecture and am experienced
							designing applications with back-end platforms including Kafka, Spring, Node.JS, MySQL, Redis, deployed
							on various platforms such as Google Cloud Platform and AWS.
						</p>
						<p>
							Currently, I am studying for my Honours Bachelors of Computer Science at the University of Waterloo. In
							my free time, I sometimes like to take <Link to="/photos">photos</Link>!
						</p>
						<a href={resumeURI}>
							<button>My Resume</button>
						</a>
					</Content>
				</div>
			</Card>
		);
	}
}

export default Home;