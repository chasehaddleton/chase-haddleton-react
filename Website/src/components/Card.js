import React from "react";

class Card extends React.Component {
	render() {
		return <div className="card" classID={this.props.id} id={this.props.id}>
			{this.props.children}
		</div>;
	}
}

export default Card;
