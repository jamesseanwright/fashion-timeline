import postService from '../services/postService';
import constants from '../actions/constants';

const postActions = {
	listen() {
		postService.listen(post => this.dispatch(constants.onPostReceived, post));
	}
}

export default postActions;