import React, {Component} from "react";
import Card from "../components/Card";
import Content from "../components/Content";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			links: []
		};
	}

	componentDidMount() {
		let data = [
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
				name: 'envelope',
				url: 'mailto:',
				accountName: 'chase@chasehaddleton.com'

			}];

		this.setState({links: data});
	}

	render() {
		const links = this.state.links.map((obj) => {
			let className = "fa fa-" + obj.name.toLowerCase();
			return <a href={obj.url + obj.accountName} key={obj.name}><i className={className} /></a>});

		return (
			<Card id="footer">
				<Content>
					{links}
				</Content>
			</Card>
		);
	}
}

export default Footer;