import React from 'react';
import WorkHome from './WorkHome';
import '../assets/styles/work.css';
import { Route, Switch } from 'react-router-dom';
import Owlz from './Owlz';
import Tweets from './Tweets';
import BookRec from './BookRec';
import OneStopShop from './OneStopShop';

const Work = ({ match }) => {
	return (
		<main className="work">
			<Switch>
				<Route path={`${match.url}/owlz`} component={Owlz} />
				<Route path={`${match.url}/tweets`} component={Tweets} />
				<Route
					path={`${match.url}/one-stop-shop`}
					component={OneStopShop}
				/>
				<Route
					path={`${match.url}/book-recommendations`}
					component={BookRec}
				/>
				<Route component={WorkHome} />
			</Switch>
		</main>
	);
};

export default Work;
