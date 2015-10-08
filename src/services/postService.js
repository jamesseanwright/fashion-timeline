import Firebase from 'firebase';
const posts = new Firebase('https://fashion-timeline.firebaseio.com/');

const postService = {
	listen: function listen(callback) {
		posts.child('posts').on('child_added', data => {
			callback(data.val());
		});
	}
};

export default postService;