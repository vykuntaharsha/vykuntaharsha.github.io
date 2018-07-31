import React, { Component } from 'react';
import logo from '../assets/media/plain-logo.png';
import '../assets/styles/nav.css';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
	state = {
		menuState: false
	};

	setMenuState = () => {
		this.setState({
			menuState: !this.state.menuState
		});
	};

	render() {
		return (
			<nav>
				<div className="navbar">
					<Link to="/">
						<img className="logo" src={logo} alt="logo" />
					</Link>
					<div className="menu-section">
						<div
							className={
								'menu-icon' +
								(this.state.menuState ? ' active' : '')
							}
							onClick={this.setMenuState}>
							<div className="hamburger" />
						</div>
						<ul
							className={
								'menu' + (this.state.menuState ? ' active' : '')
							}>
							<li
								className="menu-item"
								onClick={this.setMenuState}>
								<NavLink
									exact
									to="/about"
									activeClassName="selected">
									About
								</NavLink>
							</li>
							<li
								className="menu-item"
								onClick={this.setMenuState}>
								<NavLink
									exact
									to="/work"
									activeClassName="selected">
									Work
								</NavLink>
							</li>
							<li
								className="menu-item"
								onClick={this.setMenuState}>
								<a
									href="/resume.pdf"
									target="_blank"
									rel="noreferrer noopener">
									Resume
								</a>
							</li>
							<li
								className="menu-item"
								onClick={this.setMenuState}>
								<NavLink
									exact
									to="/contact"
									activeClassName="selected">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
