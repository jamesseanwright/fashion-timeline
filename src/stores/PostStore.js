import Fluxxor from 'fluxxor';
import constants from '../actions/constants';

const PostStore = Fluxxor.createStore({
	initialize: function initialize() {
		this._posts = [];
		this.bindActions(constants.onPostReceived, this.onPostReceived);
	},

	onPostReceived: function onPostReceived(post) {
		if (Array.isArray(post))
			this._posts = post.reverse();
		else
			this._posts.unshift(post);

		console.log(this._posts);
		
		this.emit('change');
	},

	getState() {
		return {
			posts: this._posts
		};
	}
});

export default PostStore;