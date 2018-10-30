import React from "react";
import {Link} from 'react-router-dom';

class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.obj.name,
			uri: "/projects/" + props.obj.name.toLowerCase().replace(" ", "-"),
			description: props.obj.description,
			externalURI: props.obj.externalURI,
			imageURI: props.obj.imageURI
		};
	}

	render() {
		return (
			<div className="project">
				<div className="image">
					<img src={this.state.imageURI} alt={this.state.name + " Photo"} />
				</div>
				<div className="header">
					<Link to={this.state.uri}>
						<h3>{this.state.name}</h3>
					</Link>
				</div>
				<div className="body">
					<p>
						{this.state.description}
					</p>
				</div>
			</div>);
	}
}

export default Project;