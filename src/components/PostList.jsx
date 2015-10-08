import React from 'react';
import { FluxMixin, StoreWatchMixin } from 'fluxxor';
import Post from './Post';

const PostList = React.createClass({
	mixins: [StoreWatchMixin('PostStore')],

	getInitialState() {
		const { flux } = this.props;
		flux.actions.listen();
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
			<ul>
				{children}
			</ul>
		);
	}
});

export default PostList;