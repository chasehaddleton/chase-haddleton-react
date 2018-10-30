import React from "react";

class FullWidth extends React.Component {
	render() {
		return <div className="fullWidth" classID={this.props.id} id={this.props.id}>
			{this.props.children}
		</div>;
	}
}

export default FullWidth;