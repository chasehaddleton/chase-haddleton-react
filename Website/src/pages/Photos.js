import React, {Component} from "react";
import Card from "../components/Card";
import {NavLink, Link} from "react-router-dom";
import Content from "../components/Content";
import Photo from "../components/Photo";

class Photos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};

		this.filterType = this.props.match.params.type;
	}

	updateImages() {
		let data = [
			{
				id: 1,
				name: 'distillery-district',
				fileName: 'distillery-district.jpg',
				type: 'landscape',
				featured: true

			},
			{
				id: 2,
				name: 'daniel-portrait',
				fileName: 'daniel-portrait.jpg',
				type: 'portrait',
				featured: false
			},
			{
				id: 3,
				name: 'house-fire-1',
				fileName: 'house-fire-1.jpg',
				type: 'action',
				featured: false
			},
			{
				id: 4,
				name: 'house-fire-2',
				fileName: 'house-fire-2.jpg',
				type: 'action',
				featured: true
			}];

		if (this.filterType) {
			data = data.filter((obj) => {
				if (this.filterType === "all") return true;
				return obj.type === this.filterType;
			});
		} else {
			data = data.filter((obj) => {
				return obj.featured;
			});
		}

		this.setState({photos: data});
	}

	componentDidMount() {
		this.updateImages();
	}

	componentWillReceiveProps(nextProps) {
		this.filterType = nextProps.match.params.type;
		this.updateImages();
	}

	render() {
		const photoNodes = this.state.photos.map((obj) => (<Photo obj={obj} key={obj.name}/>));
		const links = ["All", "Music", "Portrait", "Action", "Landscape", "Other"].map(
			(uri) => {
				let link = "/photos/" + uri.toLocaleLowerCase();
				return (<div key={uri}><NavLink to={link} activeClassName="selected">{uri}</NavLink><br /></div>);
			});

		return (
			<Card id="photoCard">
				<div classID="left" id="left">
					<Content>
						<Link to="/photos"><h2>Photos</h2></Link>
						{links}
					</Content>
				</div>
				<Content>
					{photoNodes}
				</Content>
			</Card>);
	}
}


export default Photos;