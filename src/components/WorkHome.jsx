import React, { Fragment } from 'react';
import WorkPreview from './WorkPreview';
import owlzCover from '../assets/media/owlz/cover.png';
import tweetsCover from '../assets/media/tweets/cover.png';
import oneStopCover from '../assets/media/one-stop/cover.png';
import bookRecCover from '../assets/media/book-rec/cover.png';
import { Link } from 'react-router-dom';

const WorkHome = () => {
	return (
		<Fragment>
			<h1>Work and Projects</h1>
			<ul>
				<li>
					<WorkPreview
						image={owlzCover}
						name="Owlz"
						link="/work/owlz"
					/>
					<Link className="link" to="/work/owlz">
						view
					</Link>
				</li>
				<li>
					<WorkPreview
						image={tweetsCover}
						name="Tweets"
						link="/work/tweets"
					/>
					<Link className="link" to="/work/tweets">
						view
					</Link>
				</li>
				<li>
					<WorkPreview
						image={oneStopCover}
						name="One Stop Shop"
						link="/work/one-stop-shop"
					/>
					<Link className="link" to="/work/one-stop-shop">
						view
					</Link>
				</li>
				<li>
					<WorkPreview
						image={bookRecCover}
						name="book recommendations"
						link="/work/book-recommendations"
					/>
					<Link className="link" to="/work/book-recommendations">
						view
					</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default WorkHome;
