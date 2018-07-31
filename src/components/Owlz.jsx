import React from 'react';
import { images } from '../assets/media/owlz';
import WorkDetails from './WorkDetails';

const Owlz = () => {
	const description = [
		'Setup project stack and maitain deployment to Heroku',
		'Develop progressive webapp in the frontend',
		'Create responsive, robust ui using css3 grid and flexbox',
		'Develop security measures for the data in PostgreSQL database'
	];

	return (
		<WorkDetails
			heading="Owlz"
			images={images}
			description={description}
			builtUsing="Java, Spring, PostgreSQL, JavaScript, React, Redux, HTML5, css3, git, MailChimp and Heroku."
			link="https://www.owlz.io"
		/>
	);
};

export default Owlz;
