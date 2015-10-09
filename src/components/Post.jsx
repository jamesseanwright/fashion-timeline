import React from 'react';
import Media from './Media';

const Post = React.createClass({
	render() {
		const { title, time, text, media } = this.props;

		return (
			<li>
				<h3>{title}</h3>
				<time>{time}</time>
				<p>{text}</p>
			</li>
		);
	}
});

export default Post;