import React from 'react';

const WorkDetails = ({ heading, images, description, builtUsing, link }) => {
	return (
		<div className="work-content">
			<h1>{heading}</h1>
			<div className="details">
				<p>
					<strong>Built using: </strong> {builtUsing}
				</p>
				<p>
					<strong>Website: </strong>
					<a href={link} target="_blank" rel="noopener noreferrer">
						view
					</a>
				</p>
				<h4>Description/Responsibilites: </h4>
				<ul className="description">
					{description.map((item, index) => {
						return <li key={index}> {item}</li>;
					})}
				</ul>
				<h4>Screenshots: </h4>
				<ul className="screenshots">
					{images.map((image, index) => {
						return (
							<li key={index}>
								<img src={image} alt="screenshot" />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default WorkDetails;
