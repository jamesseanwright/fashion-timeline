import React from 'react';

const Media = React.createClass({
	componentDidMount() {
		const { videoEl } = this.refs;
		if (videoEl)
			videoEl.play();
	},

	// hack to continue playback on React errors
	componentDidUpdate() {
		const { videoEl } = this.refs;
		if (videoEl)
			videoEl.play();
	},

	render() {
		const { type, url, alt } = this.props;

		if (type === 'image')
			return <img src={url} alt={alt} />

		return <video ref="videoEl" src={url} loop muted />
	}
});

export default Media;