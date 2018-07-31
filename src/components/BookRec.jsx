import React from 'react';
import { images } from '../assets/media/book-rec';
import WorkDetails from './WorkDetails';

const BookRec = () => {
	const description = [
		'A single page book recommendation application based on the requirements for the assignment in the class',
		'Users can vote their interests, find their interested book by filtering and searching',
		'Pagination for navigating through pages',
		'Users can create new Books',
		'Created RESTful API services, responsive and component-based UI layout'
	];

	return (
		<WorkDetails
			heading="Book Recommendations"
			images={images}
			description={description}
			builtUsing="JavaScript, Node, express, React, HTML, css, git and Heroku"
			link="https://book-recommendations-lavender.herokuapp.com/"
		/>
	);
};

export default BookRec;
