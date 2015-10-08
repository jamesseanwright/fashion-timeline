import Firebase from 'firebase';
const firebase = new Firebase('https://fashion-timeline.firebaseio.com/');

const postService = {
	listen(callback) {
		firebase.child('posts').on('child_added', data => {
			callback(data.val());
		});
	}
};

export default postService;