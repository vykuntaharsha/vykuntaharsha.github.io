import React from 'react';
import { images } from '../assets/media/tweets';
import WorkDetails from './WorkDetails';

const Tweets = () => {
	const description = [
		'A single page social networking application',
		'Users will have a newsfeed and follower recommendations based on what the user follows',
		'User can login using Twitter’s OAuth',
		'User can like, comment and share the tweets to his/her Twitter',
		'Tweets are displayed based on EdgeRanking system',
		'Deployed to Heroku'
	];

	return (
		<WorkDetails
			heading="Tweets"
			images={images}
			description={description}
			builtUsing="JavaScript, Node, express, MongoDB, React, Redux, HTML5, css3, Bootstrap, FontAwesome, git and Heroku."
			link="http://tweets-neu.herokuapp.com"
		/>
	);
};

export default Tweets;
