import React from 'react';
import '../assets/styles/footer.css';

const Footer = () => {
	return (
		<section className="footer">
			<span>© 2018 Harsha Vykunta.</span>
			<ul className="footer-links">
				<li>
					<a
						href="https://www.linkedin.com/in/harsha-vykunta/"
						target="_blank"
						rel="noopener noreferrer">
						<i className="icon ion-logo-linkedin" />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/harshavykunta7"
						target="_blank"
						rel="noopener noreferrer">
						<i className="icon ion-logo-facebook" />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/vykuntaharsha"
						target="_blank"
						rel="noopener noreferrer">
						<i className="icon ion-logo-github" />
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Footer;
