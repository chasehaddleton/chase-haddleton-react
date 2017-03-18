import React from "react";

class Center extends React.Component {
	render() {
		return <div className="center" classID={this.props.id} id={this.props.id}>
			{this.props.children}
		</div>;
	}
}

export default Center;
