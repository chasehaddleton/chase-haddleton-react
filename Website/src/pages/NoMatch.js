import React, {Component} from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import Content from "../components/Content";

class NoMatch extends Component {
	render() {
		return (
			<Card id="idCard">
				<Content>
					<h2>Oops!</h2>
					<p>
						Looks like the page you requested doesn't exist!
					</p>
					<p>Wanna go back?</p>
					<Link to="/">
						<button>Home</button>
					</Link>
				</Content>
			</Card>
		);
	}
}

export default NoMatch;