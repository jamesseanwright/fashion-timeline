import React from 'react';

const Media = React.createClass({
	render() {
		const { type, url, alt } = this.props;

		if (type === 'image')
			return <img src={url} alt={alt} />

		return <video src={url} />
	}
});

export default Media;