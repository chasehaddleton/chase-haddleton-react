import React, {Component} from "react";
import Card from "../components/Card";
import Content from "../components/Content";
import Photo from "../components/Photo";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Photos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		this.setState({
			photos: [
				{
					id: 1,
					fileName: 'distillery-district.jpg',
					type: 'landscape'

				},
				{
					id: 2,
					fileName: 'daniel-portrait.jpg',
					type: 'portrait'

				}]
		});
	}


	render() {
		const photoNodes = this.state.photos.map(
			(obj, i) => (
				<ReactCSSTransitionGroup transitionName="fade"
				                         transitionEnterTimeout={2000}
				                         transitionLeaveTimeout={500}>
					<Photo obj={obj} key={i}/>
				</ReactCSSTransitionGroup>));

		return (
			<Card id="photoCard">
				<div classID="left" id="left">
					<Content>
						<h2>Photos</h2>
					</Content>
				</div>
				<Content>
					{photoNodes}
				</Content>
			</Card>);
	}
}


export default Photos;