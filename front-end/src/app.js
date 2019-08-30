import React, {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import NoMatch from "./pages/NoMatch";
import FullPage from "./components/FullPage";
import Projects from "./pages/Projects";
import Header from "./components/Header";

let history = createHistory();

class App extends Component {
	render() {
		return (
			<Router basename="/" history={history}>
				<main>
					<Header/>
					<FullPage>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path='/photos/:type' component={Photos}/>
							<Route path='/photos' component={Photos}/>
							<Route path='/projects/:id' component={Projects}/>
							<Route path="/projects" component={Projects}/>
							<Route component={NoMatch}/>
						</Switch>
					</FullPage>
				</main>
			</Router>
		)
	}
}

export default App;