import Fluxxor from 'fluxxor';
import constants from '../actions/constants';

class PostStore {
	constructor(posts) {
		this._posts = posts || [];
		bindActions(constants.onPostReceived, this.onPostReceived);
	}

	onPostReceived(data) {
		const post = data.val();
		this._posts.push(post);
		this.emit('change');
	}
}

export default PostStore;