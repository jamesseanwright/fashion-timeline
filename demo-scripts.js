/* scripts to run in browser dev tools
 * to push new items to Firebase */

var currentIndex = 1;
 
postService.push(++currentIndex, {
	media: { 
		alt: 'A polka dot dress',
		type: 'image',
		url: 'http://res.cloudinary.com/dkc8sy0wv/image/upload/c_scale,w_416/v1444390356/3_za21xb.jpg' 
	}, 

	text: 'A polka dot dress',
	time: '13:00',
	title: 'A Vibrant Dress'
});

postService.push(++currentIndex, {
	media: { 
		alt: 'Someone walking up the catwalk...',
		type: 'image',
		url: 'http://res.cloudinary.com/dkc8sy0wv/video/upload/c_scale,w_416/v1444390196/2_nxby3p.mov' 
	}, 

	text: 'Someone walking up the catwalk...',
	time: '13:00',
	title: 'Someone on the Catwalk'
});

postService.push(++currentIndex, {
	media: { 
		alt: 'A pink dress modelled by a newcomer',
		type: 'image',
		url: 'http://res.cloudinary.com/dkc8sy0wv/video/upload/v1444390196/3_n2kfp8.mov' 
	}, 

	text: 'A pink dress modelled by a newcomer',
	time: '13:00',
	title: 'Pink!'
});

postService.push(++currentIndex, {
	media: { 
		alt: 'Another dress designed by Joe Bloggs',
		type: 'image',
		url: 'http://res.cloudinary.com/dkc8sy0wv/video/upload/v1444389986/1_m829ml.mov' 
	}, 

	text: 'Another dress designed by Joe Bloggs',
	time: '13:00',
	title: 'Joe Bloggs'
});

postService.push(++currentIndex, {
	media: { 
		alt: 'One more image',
		type: 'image',
		url: 'http://res.cloudinary.com/dkc8sy0wv/image/upload/c_scale,w_418/v1444390356/1_urmeru.jpg' 
	}, 

	text: 'One more image',
	time: '13:00',
	title: 'One More'
});