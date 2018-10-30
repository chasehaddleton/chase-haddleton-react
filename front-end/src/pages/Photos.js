import React, {Component} from "react";
import Card from "../components/Card";
import {Link, NavLink} from "react-router-dom";
import Content from "../components/Content";
import Photo from "../components/Photo";
import {imageData} from '../components/Config';

class Photos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};

		this.filterType = this.props.match.params.type;
	}

	updateImages() {
		let data = imageData;

		if (this.filterType) {
			data = data.filter((obj) => {
				if (this.filterType === "all") return true;
				return obj.imageType === this.filterType;
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
						<div className="links">
							{links}
						</div>
					</Content>
				</div>
				<div classID="right" id="right">
					<Content>
						{photoNodes}
					</Content>
				</div>
			</Card>);
	}
}


export default Photos;