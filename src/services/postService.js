import Firebase from 'firebase';
const firebase = new Firebase('https://fashion-timeline.firebaseio.com/posts');

const postService = {
	listen(callback) {
		firebase.on('child_added', data => {
			callback(data.val());
		});
	},

	push(id, post) {
		post.id = id + 1;
		firebase.child(`posts/${id}`).set(post);
	}
};

// so data can be pushed for demo
if (typeof global.document !== 'undefined')
	window.postService = postService;

export default postService;