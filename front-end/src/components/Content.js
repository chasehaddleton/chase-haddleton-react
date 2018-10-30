import React from "react";

class Content extends React.Component {
	render() {
		return <div className="content" classID={this.props.id} id={this.props.id}>
			{this.props.children}
		</div>;
	}
}

export default Content;
