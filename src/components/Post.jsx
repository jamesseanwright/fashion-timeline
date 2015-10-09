import React from 'react';
import Media from './Media';

const Post = React.createClass({
	componentDidMount() {
		// for fade in
		const { listItem } = this.refs;
		window.getComputedStyle(listItem).opacity;
		listItem.style.opacity = 1;
	},

	render() {
		const { title, time, text, media } = this.props;

		return (
			<li ref="listItem" className="post-item">
				<h3>{title}</h3>
				<Media {...media} />
				<time>{time}</time>
				<p>{text}</p>
			</li>
		);
	}
});

export default Post;