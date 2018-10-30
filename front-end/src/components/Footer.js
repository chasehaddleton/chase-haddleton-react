import React, {Component} from "react";
import Card from "./Card";
import Content from "./Content";
import {NavLink} from "react-router-dom";
import {navigationLinks, socialMediaLinks} from "./Config";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			socialMedia: [],
			nav: [],
			page: ''
		};
	}

	componentDidMount() {
		this.setState({socialMedia: socialMediaLinks, nav: navigationLinks});
	}

	render() {
		const navigationIcons = this.state.nav.map((obj) => {
			let uri = '/' + obj.to;

			let className = "fa fa-" + obj.icon.toLowerCase();

			if (uri === '/') {
				return <NavLink exact to={uri} key={obj.to} activeClassName="selected" data-balloon="home"
				                data-balloon-pos="up"><i
					className={className}/></NavLink>;
			} else {
				return <NavLink to={uri} key={obj.to} activeClassName="selected" data-balloon={obj.to}
				                data-balloon-pos="up"><i className={className}/></NavLink>;
			}
		});

		const socialMediaIcons = this.state.socialMedia.map((obj) => {
			let className = "fa fa-" + obj.icon.toLowerCase();
			return <a href={obj.url + obj.accountName} key={obj.name} data-balloon={obj.name}><i className={className}/></a>
		});

		return (
			<Card id="footer">
				<Content id="left">
					{navigationIcons}
				</Content>
				<Content id="right">
					{socialMediaIcons}
				</Content>
			</Card>
		);
	}
}

export default Footer;