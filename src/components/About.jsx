import React from 'react';
import teachingAssistant from '../assets/media/teaching-assistant.jpg';
import LinkedInBadge from './LinkedInBadge';
import '../assets/styles/about.css';
import neu from '../assets/media/northeastern-university.png';
import nit from '../assets/media/nit.png';
import owlz from '../assets/media/owlz-logo.svg';

const About = () => {
	return (
		<main className="about">
			<div className="profile">
				<LinkedInBadge />
				<div className="profile-description">
					<h1>About</h1>
					<p>
						I am currently pursuing a Master's degree in Information
						Systems from Northeastern University. With a year of
						experience in building highly scalable, robust and
						responsive web applications, I enjoy spending time on
						bringing new technology products to the market. I
						usually build the applications with MERN stack (MongoDB,
						Express, ReactJs, and NodeJs).
					</p>
					<p>
						I work part-time as a Teaching Assistant at Northeastern
						University for the courses Application Engineering and
						Development (Java) and Program Structures and
						Algorithms.
					</p>
					<p>I do photography and play video games in spare time.</p>
				</div>
			</div>
			<div className="experience">
				<div className="education">
					<div className="heading">
						<h1>
							<i className="icon ion-md-school" /> Education
						</h1>
					</div>
					<div className="school">
						<h2>
							<img className="logo" src={neu} alt="neu" />{' '}
							Northeastern University
						</h2>
						<p>Master's in Information Systems</p>
					</div>
					<div className="school">
						<h2>
							<img className="logo" src={nit} alt="nit" />National
							Institute of Technology Rourkela
						</h2>
						<p>
							Bachelor's of Technology in Metallurgical and
							Materials Engineering
						</p>
					</div>
				</div>
				<div className="companies">
					<div className="heading">
						<h1>
							<i className="icon ion-md-briefcase" /> Work
							Experience
						</h1>
					</div>
					<div className="company">
						<h2>
							<img className="logo" src={owlz} alt="owlz" />{' '}
							Owlz.io
						</h2>
						<p>Software Developer</p>
					</div>
					<div className="company">
						<h2>
							<img className="logo" src={neu} alt="neu" />{' '}
							Northeastern University
						</h2>
						<p>Graduate Teaching Assistant</p>
					</div>
				</div>
			</div>
			<div className="awards">
				<div className="heading">
					<h1>
						<i className="icon ion-md-trophy" /> Awards
					</h1>
				</div>
				<p>
					Awarded as ‘Teaching Excellence’ by Northeastern University
					for the academic year (2017 - 2018) on June 9, 2018
				</p>
				<img src={teachingAssistant} alt="teaching assistant" />
			</div>
		</main>
	);
};

export default About;
