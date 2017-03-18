import React, {Component} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
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

	componentDidMount() {
		this.setState({
			photos: [
				{
					id: 1,
					name: 'distillery-district',
					fileName: 'distillery-district.jpg',
					type: 'landscape'

				},
				{
					id: 2,
					name: 'daniel-portrait',
					fileName: 'daniel-portrait.jpg',
					type: 'portrait'

				},
				{
					id: 3,
					name: 'house-fire-1',
					fileName: 'house-fire-1.jpg',
					type: 'action'

				},
				{
					id: 4,
					name: 'house-fire-2',
					fileName: 'house-fire-2.jpg',
					type: 'action'

				}]
		});
	}


	render() {
		const photoNodes = this.state.photos.map(
			(obj) => (<Photo obj={obj} key={obj.name}/>));

		return (
			<Card id="photoCard">
				<div classID="left" id="left">
					<Content>
						<h2>Photos</h2>
						<Link to="/photos/music">Music</Link><br/>
						<Link to="/photos/portrait">Portrait</Link><br/>
						<Link to="/photos/action">Action</Link><br/>
						<Link to="/photos/landscape">Landscape</Link><br/>
						<Link to="/photos/other">Other</Link>
					</Content>
				</div>
				<Content>
					{photoNodes}
				</Content>
			</Card>);
	}
}


export default Photos;