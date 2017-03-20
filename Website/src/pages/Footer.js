import React, {Component} from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import {NavLink} from "react-router-dom";

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
		let socialMedia = [
			{
				name: 'GitHub',
				url: 'https://github.com/',
				accountName: 'chasehaddleton'

			},
			{
				name: 'LinkedIn',
				url: 'https://ca.linkedin.com/in/',
				accountName: 'chasehaddleton'

			},
			{
				name: 'Instagram',
				url: 'https://instagram.com/',
				accountName: 'chasehaddleton'

			},
			{
				name: 'envelope',
				url: 'mailto:',
				accountName: 'chase@chasehaddleton.com'

			}];

		let navigation = [
			{
				to: '',
				icon: 'home',
				selected: false
			}, {
				to: 'development',
				icon: 'code',
				selected: false
			}, {
				to: 'photos',
				icon: 'camera',
				selected: false
			}
		];

		this.setState({socialMedia: socialMedia, nav: navigation});
	}

	render() {
		const navigationIcons = this.state.nav.map((obj) => {
			let uri = '/' + obj.to;

			let className = "fa fa-" + obj.icon.toLowerCase();

			/*if (obj.selected) {
				className += " active";
			}*/

			return <NavLink exact to={uri} key={obj.to} activeClassName="selected"><i className={className} /></NavLink>});

		const socialMediaIcons = this.state.socialMedia.map((obj) => {
			let className = "fa fa-" + obj.name.toLowerCase();
			return <a href={obj.url + obj.accountName} key={obj.name}><i className={className} /></a>});

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