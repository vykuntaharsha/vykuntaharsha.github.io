import React, { Component, Fragment } from 'react';
import Typist from 'react-typist';

class Type extends Component {
	state = {
		typing: true
	};
	done = () => {
		this.setState({ typing: false }, () => {
			this.setState({ typing: true });
		});
	};
	render() {
		return (
			<Fragment>
				{this.state.typing ? (
					<span>
						A{' '}
						<Typist
							className="typer"
							avgTypingDelay={100}
							onTypingDone={this.done}>
							<span>Developer</span>
							<Typist.Backspace count={9} delay={2000} />
							<span>Designer</span>
							<Typist.Backspace count={8} delay={2000} />
							<span>Photographer</span>
							<Typist.Backspace count={12} delay={2000} />
							<span>Gamer</span>
							<Typist.Backspace count={5} delay={2000} />
						</Typist>
					</span>
				) : (
					''
				)}
			</Fragment>
		);
	}
}

export default Type;
