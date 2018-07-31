import React from 'react';
import { images } from '../assets/media/one-stop';
import WorkDetails from './WorkDetails';

const OneStopShop = () => {
	const description = [
		'The application consists of individual profiles, custom analytics, cart management for both signed up and guest users',
		'User can search for the products',
		'User can view detailed listing of the product',
		'Utilized Bootstrap for CSS styling, Stripe for payment options and MailChimp to send custom emails to customers',
		'The application is deployed on Heroku and uses Amazon’s AWS s3 for static files'
	];

	return (
		<WorkDetails
			heading="OneStopShop"
			images={images}
			description={description}
			builtUsing="Python, Django, PostgreSQl, JavaScript, HTML, css, Jquery, Ajax, AWS s3, Stripe, MailChimp and Heroku."
			link="https://onestop-shop.herokuapp.com"
		/>
	);
};

export default OneStopShop;
