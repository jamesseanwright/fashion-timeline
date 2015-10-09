import React from 'react';

const Media = React.createClass({
	play(evt) {
		evt.target.play();
		console.log('play on client');
	},

	render() {
		const { type, url, alt } = this.props;

		if (type === 'image')
			return <img src={url} alt={alt} />

		return <video src={url} onLoadedData={this.play} loop mute />
	}
});

export default Media;