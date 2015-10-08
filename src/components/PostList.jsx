import React, { Component } from 'react';
import { FluxMixin, StoreWatchMixin } from 'fluxxor';

const PostList = React.createClass({
	mixins: [FluxMixin(React), StoreWatchMixin('PostStore')],

	getInitialState() {
		return null;
	},

	getStateFromFlux() {

	},

	render() {
		return <p>Lol</p>
	}
});

export default PostList;