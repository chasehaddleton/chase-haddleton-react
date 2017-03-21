import React from "react";
import {staticContentURI} from './Config';

class Photo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.obj.name,
			fileName: staticContentURI + "/images/" +props.obj.fileName,
			type: props.obj.type
		};
	}

	render() {
		return <img src={this.state.fileName} className="photo" classID={this.state.name} id={this.state.name}
		            key={this.state.name} alt={this.state.fileName}/>;
	}
}

export default Photo;