import postService from '../services/postService';
import constants from '../actions/constants';

class PostActions {
	listen() {
		postService.listen(post => this.dispatch(constants.onPostReceived, post));
	}
}

export default PostActions;