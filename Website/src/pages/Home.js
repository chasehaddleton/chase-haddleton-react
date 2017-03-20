import React, {Component} from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import Content from "../components/Content";

class Home extends Component {
	render() {
		return (
			<Card id="idCard">
				<div id="left">
					<p/>
				</div>
				<div id="right">
					<Content>
						<h2>Hi, I'm Chase Haddleton</h2>
						<p>I am an 18 year old Waterloo-based software developer. Five words to describe
							myself would be; leadership oriented, constant learner, and driven. I enjoys
							challenges and love applying my knowledge to solving complex problems in
							unique and innovative ways.
						</p>
						<p>
							I am knowledgeable in Java, JS, HTML5, CSS3 and C. I’ve worked with various
							back-end infrastructure software including Nginx, MySQL, Node.JS, Redis and
							Apache, and on various platforms such as Google Cloud Platform and
							Amazon’s AWS. Some of my code is available on <a href="https://github.com/chasehaddleton">
							GitHub</a>.
						</p>
						<p>
							Currently, I am studying for my Honours Bachelors of Math in Computer Science
							at the University of Waterloo, and am volunteering as a Java software mentor for
							FIRST Robotics Competition Team D.A.V.E. In my free time, I take&nbsp;
							<Link to="/photos">photos</Link> and help moderate the LinusTechTips forum.
						</p>
						<a href="/files/chase-haddleton-resume.pdf">
							<button>My Resume</button>
						</a>
					</Content>
				</div>
			</Card>
		);
	}
}

export default Home;