import React from 'react';
import { FluxMixin, StoreWatchMixin } from 'fluxxor';
import Post from './Post';

const PostList = React.createClass({
	mixins: [StoreWatchMixin('PostStore')],

	getInitialState() {
		return null;
	},

	getStateFromFlux() {
		const { flux } = this.props;
		return flux.store('PostStore').getState();
	},

	render() {
		const { posts } = this.state;

		const children = posts.map(post => <Post key={post.id} {...post} />);

		return (
			<ul className="post-list">
				{children}
			</ul>
		);
	}
});

export default PostList;