import React from "react";

class FullPage extends React.Component {
	render() {
		return <div className="fullPage" classID={this.props.id} id={this.props.id}>
			{this.props.children}
		</div>;
	}
}

export default FullPage;