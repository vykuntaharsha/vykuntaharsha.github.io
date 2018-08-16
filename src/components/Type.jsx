import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import '../assets/styles/typer.css';
class Type extends Component {
	render() {
		return (
			<span className="typer-holder">
				<Typing loop className="typer">
					<span>An Engineer</span>
					<Typing.Delay ms={2000} />
					<Typing.Backspace count={10} />
					<span> Developer</span>
					<Typing.Delay ms={2000} />
					<Typing.Backspace count={10} />
					<span> Designer</span>
					<Typing.Delay ms={2000} />
					<Typing.Backspace count={8} />
					<span> Photographer</span>
					<Typing.Delay ms={2000} />
					<Typing.Backspace count={12} />
					<span> Gamer</span>
					<Typing.Delay ms={2000} />
					<Typing.Backspace count={6} />
					<Typing.Reset count={1} delay={0} />
				</Typing>
			</span>
		);
	}
}

export default Type;
