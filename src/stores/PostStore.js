import Fluxxor from 'fluxxor';
import constants from '../actions/constants';

const PostStore = {
	initialize: function initialize(posts) {
		this._posts = posts || [];
		this.bindActions(constants.onPostReceived, this.onPostReceived);
	},

	onPostReceived: function onPostReceived(data) {
		const post = data.val();
		this._posts.push(post);
		this.emit('change');
	}
};

export default PostStore;