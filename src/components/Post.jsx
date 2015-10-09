import React from 'react';
import Media from './Media';

const Post = React.createClass({
	render() {
		const { title, time, text, media } = this.props;

		return (
			<li className="post-item">
				<h3>{title}</h3>
				<Media {...media} />
				<time>{time}</time>
				<p>{text}</p>
			</li>
		);
	}
});

export default Post;