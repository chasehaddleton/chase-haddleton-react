import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FullPage from "./components/FullPage";
import Center from "./components/Center";
import createHistory from "history/createBrowserHistory";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

let history = createHistory();

class App extends Component {
	render() {
		return (
			<main>
				<FullPage>
					<Router basename="/" history={history}>
						<Center>
							<ReactCSSTransitionGroup transitionName="fade"
							                         transitionEnterTimeout={2000}
							                         transitionLeaveTimeout={500}>
								<Switch>
									<Route exact path='/' component={Home}/>
									<Route path='/photos' component={Photos}/>
								</Switch>
							</ReactCSSTransitionGroup>
						</Center>
					</Router>
				</FullPage>
			</main>
		)
	}
}

export default App;