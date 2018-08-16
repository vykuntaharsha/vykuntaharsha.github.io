import React from 'react';
import bgImg from '../assets/media/cover.jpg';
import Type from './Type';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import '../assets/styles/cover.css';

const Cover = () => {
	return (
		<main className="cover">
			<Particles
				className="particles"
				width="100vw"
				height="80vh"
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 800
							}
						},
						color: {
							value: '#fff'
						},
						opacity: {
							value: 0.5,
							random: false,
							anim: {
								enable: false,
								speed: 1,
								opacity_min: 0.1,
								sync: false
							}
						},
						size: {
							value: 3,
							random: true,
							anim: {
								enable: false,
								speed: 20,
								size_min: 0.1,
								sync: false
							}
						},
						line_linked: {
							enable: true,
							distance: 150,
							color: '#ffffff',
							opacity: 0.4,
							width: 1
						},
						move: {
							enable: true,
							speed: 1,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'out',
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200
							}
						}
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: {
								enable: true,
								mode: 'grab'
							},
							onclick: {
								enable: true,
								mode: 'push'
							},
							resize: true
						}
					}
				}}
			/>
			<Parallax
				className="cover-parallax"
				bgImage={bgImg}
				bgImageAlt="cover"
				strength={200}>
				<div className="intro">
					<h2>Hi, I'm Harsha</h2>
					<Type />
					<Link to="/contact">Let's connect</Link>
				</div>
			</Parallax>
		</main>
	);
};

export default Cover;
