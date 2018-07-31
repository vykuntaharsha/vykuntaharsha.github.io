import React from 'react';
import '../assets/styles/contact.css';

const Contact = () => {
	return (
		<main class="contact">
			<div className="header">
				<h1>Get in touch</h1>
			</div>
			<div className="content">
				<div className="contact-info">
					<h2>Harsha Vykunta</h2>
					<p>
						Let's grab a coffee, share our interests and see how we
						can collaborate to build amazing things in future.
					</p>
					<p>
						<i className="icon ion-md-pin" /> Seattle, WA.
					</p>
					<span>Connect with me:</span>
					<a
						href="https://www.linkedin.com/in/harsha-vykunta/"
						target="_blank"
						rel="noopener noreferrer">
						<i className="icon ion-logo-linkedin" />
					</a>
					<a
						href="https://www.facebook.com/harshavykunta7"
						target="_blank"
						rel="noopener noreferrer">
						<i className="icon ion-logo-facebook" />
					</a>
				</div>
				<form
					method="POST"
					action="//formspree.io/bobbyvykunta@gmail.com"
					target="_blank"
					rel="noreferrer noopener">
					<label for="name">
						Name:
						<input
							required
							type="name"
							name="name"
							placeholder="Your name"
						/>
					</label>
					<label for="_replyto">
						Email:
						<input
							required
							type="email"
							name="_replyto"
							placeholder="Your email"
						/>
					</label>
					<label for="message">
						Message:
						<textarea
							required
							name="message"
							placeholder="Your message"
						/>
					</label>
					<input
						type="hidden"
						name="_next"
						value="localhost:3000/thanks"
					/>
					<input
						type="text"
						name="_gotcha"
						style={{ display: 'none' }}
					/>
					<button type="submit" onClick={this.handleSubmit}>
						Send
					</button>
				</form>
			</div>
		</main>
	);
};

export default Contact;
