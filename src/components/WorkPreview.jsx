import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/work-preview.css';

const WorkPreview = ({ image, name, link }) => {
	return (
		<div className="work-preview">
			<img src={image} alt="preview" />
			<div className="work-link">
				<p>{name}</p>
				<Link to={link}>
					<span>View</span>
				</Link>
			</div>
		</div>
	);
};

export default WorkPreview;
