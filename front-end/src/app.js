import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import NoMatch from "./pages/NoMatch";
import Center from "./components/Center";
import Footer from "./components/Footer";
import FullPage from "./components/FullPage";
import Projects from "./pages/Projects";

let history = createHistory();

class App extends Component {
	render() {
		return (
			<Router basename="/" history={history}>
				<main>
					<FullPage>
						<Center>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path='/photos/:type' component={Photos}/>
								<Route path='/photos' component={Photos}/>
								<Route path='/projects/:id' component={Projects}/>
								<Route path="/projects" component={Projects}/>
								<Route component={NoMatch}/>
							</Switch>
						</Center>
					</FullPage>
					<Footer />
				</main>
			</Router>
		)
	}
}

export default App;