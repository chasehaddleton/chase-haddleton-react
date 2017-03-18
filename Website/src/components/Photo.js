import React from "react";

class Photo extends React.Component {
	constructor(props) {
		super(props);

		this.imagePath = '/images/';

		this.state = {
			id: props.obj.id,
			name: props.obj.name,
			fileName: this.imagePath + props.obj.fileName,
			type: props.obj.type
		};
	}

	render() {
		return <img src={this.state.fileName} className="photo" classID={this.state.id} id={this.state.id}
		            key={this.state.name} alt={this.state.fileName}/>;
	}
}

export default Photo;
