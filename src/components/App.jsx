import React, { Component } from 'react';
import Cover from './Cover';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Thanks from './Thanks';
import '../assets/styles/app.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Nav />
				<Switch>
					<Route exact path="/" component={Cover} />
					<Route exact path="/about" component={About} />
					<Route path="/work" component={Work} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/thanks" component={Thanks} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
