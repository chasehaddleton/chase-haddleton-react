import React, {Component} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import Content from "../components/Content";
import Project from "../components/Project";
import {projectData, staticContentURI} from '../components/Config';

class Projects extends Component {
	constructor(props) {
		super(props);

		projectData.forEach(pd => pd.imageURI = staticContentURI + pd.imageURI);

		this.state = {
			projects: projectData
		};
	}
	
	render() {
		const projectNodes = this.state.projects.map((obj) => (<Project obj={obj} key={obj.name}/>));

		return (
			<Card id="projectCard">
				<div classID="top" id="top">
					<Content>
						<Link to="/projects">
							<h2>Projects</h2>
						</Link>
						<div classID="bottom" id="bottom">
							{projectNodes}
						</div>
					</Content>
				</div>
			</Card>);
	}
}


export default Projects;