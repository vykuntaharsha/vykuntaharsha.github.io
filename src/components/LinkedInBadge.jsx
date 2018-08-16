import React, { Component } from 'react';

class LinkedInBadge extends Component {
	script;

	componentDidMount() {
		this.script = document.createElement('script');
		this.script.src = 'https://platform.linkedin.com/badges/js/profile.js';
		this.script.async = true;
		this.script.defer = true;

		document.body.appendChild(this.script);
	}

	componentWillUnmount() {
		if (this.script) {
			document.body.removeChild(this.script);
		}
	}

	render() {
		return (
			<div
				className="LI-profile-badge"
				data-version="v1"
				data-size="medium"
				data-locale="en_US"
				data-type="vertical"
				data-theme="dark"
				data-vanity="harsha-vykunta">
				<a
					className="LI-simple-link"
					href="https://www.linkedin.com/in/harsha-vykunta?trk=profile-badge"
					target="_blank"
					rel="noopener noreferrer">
					Harsha Vykunta
				</a>
			</div>
		);
	}
}

export default LinkedInBadge;
