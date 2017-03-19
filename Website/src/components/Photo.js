import React from "react";

class Photo extends React.Component {
	constructor(props) {
		super(props);

		this.imagePath = '/images/';

		this.state = {
			name: props.obj.name,
			fileName: this.imagePath + props.obj.fileName,
			type: props.obj.type
		};
	}

	render() {
		return <img src={this.state.fileName} className="photo" classID={this.state.name} id={this.state.name}
		            key={this.state.name} alt={this.state.fileName}/>;
	}
}

export default Photo;
