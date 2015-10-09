import Fluxxor from 'fluxxor';
import constants from '../actions/constants';
import iso from 'simple-iso';

const PostStore = Fluxxor.createStore({
	/* Simple ISO injects the serialised data into the store's
	 * constructor as normal, but Fluxxor brilliantly passes
	 * constructor args to the intialize function, which is great! */
	initialize: function initialize(posts) {
		console.log('******', posts);
		this._posts = posts && Array.isArray(posts) ? posts : [];
		this.bindActions(constants.onPostReceived, this.onPostReceived);
	},

	onPostReceived: function onPostReceived(post) {
		if (Array.isArray(post))
			this._posts = post.reverse();
		else
			this._posts.unshift(post);
		
		this.emit('change');

	},

	getState() {
		return {
			posts: this._posts
		};
	},

	serialise() {
		return this._posts;
	}
});

export default PostStore;