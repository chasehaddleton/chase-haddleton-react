import React from "react";
import {staticContentURI} from "./Config";

class Photo extends React.Component {
	constructor(props) {
		super(props);

		let desc = "";

		if (props.obj.hasOwnProperty('description')) {
			desc += props.obj.description;
		}

		if (props.obj.hasOwnProperty('location')) {
			if (desc !== "") {
				desc += ', ';
			}
			desc += props.obj.location;
		}

		if (props.obj.hasOwnProperty('year')) {
			if (desc !== "") {
				desc += ', ';
			}
			desc += props.obj.year;
		}

		let camera = "";
		let cameraLong = "";

		if (props.obj.hasOwnProperty('camera')) {
			camera += props.obj.camera;
			cameraLong += props.obj.camera;
		}

		if (props.obj.hasOwnProperty('lens')) {
			if (cameraLong !== "") {
				cameraLong += ', ';
			}
			cameraLong += props.obj.lens;
		}

		if (props.obj.hasOwnProperty('focalLength')) {
			if (cameraLong !== "") {
				cameraLong += ', ';
			}
			cameraLong += props.obj.focalLength + "mm";
		}

		if (props.obj.hasOwnProperty('shutterSpeed')) {
			if (camera !== "") {
				camera += ', ';
			}
			if (cameraLong !== "") {
				cameraLong += ', ';
			}
			camera += props.obj.shutterSpeed;
			cameraLong += props.obj.shutterSpeed + 's';
		}

		if (props.obj.hasOwnProperty('fNumber')) {
			if (camera !== "") {
				camera += ', ';
			}
			if (cameraLong !== "") {
				cameraLong += ', ';
			}
			camera += props.obj.fNumber;
			cameraLong += props.obj.fNumber;
		}

		if (props.obj.hasOwnProperty('iso')) {
			if (camera !== "") {
				camera += ', ';
			}
			if (cameraLong !== "") {
				cameraLong += ', ';
			}
			camera += "iso " + props.obj.iso;
			cameraLong += "iso " + props.obj.iso;
		}

		/*
			description: props.obj.description,
			location: props.obj.location,
			year: props.obj.year,
			camera: props.obj.camera,
			lens: props.obj.lens,
			focalLength: props.obj.focalLength,
			fNumber: props.obj.fNumber,
			shutterSpeed: props.obj.shutterSpeed,
		 */

		this.state = {
			name: props.obj.name,
			uri: staticContentURI + "/images/" + props.obj.fileName,
			description: desc,
			camera: camera,
			cameraLong: cameraLong
		};

	}

	render() {
		return (
			<div className="photoSet">
				<img src={this.state.uri} className="photo" classID={this.state.name} id={this.state.name}
				     key={this.state.name} alt={this.state.uri}/>

				<div className="description">
					<p>{this.state.description}</p>
					<p data-balloon={this.state.cameraLong} data-balloon-pos="up">{this.state.camera}</p>
				</div>
			</div>);
	}
}

export default Photo;