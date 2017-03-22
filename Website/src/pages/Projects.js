import React, {Component} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import Content from "../components/Content";
import Project from "../components/Project";
import {projectData} from '../components/Config';

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: []
		};
	}

	updateProject() {
		this.setState({projects: projectData});
	}

	componentDidMount() {
		this.updateProject();
	}

	render() {
		console.log(this.state.projects);
		const projectNodes = this.state.projects.map((obj) => (<Project obj={obj} key={obj.name}/>));
		console.log(projectNodes);

		return (
			<Card id="projectCard">
				<div classID="top" id="top">
					<Content>
						<Link to="/projects"><h2>Projects</h2></Link>
					</Content>
				</div>
				<Content>
					<div classID="bottom" id="bottom">
						{projectNodes}
					</div>
				</Content>
			</Card>);
	}
}


export default Projects;