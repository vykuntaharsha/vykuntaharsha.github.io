import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-123158899-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
	<Router history={createBrowserHistory()} basename={process.env.PUBLIC_URL}>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
