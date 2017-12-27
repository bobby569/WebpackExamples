const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config');
	const webpackMiddleware = require('webpack-dev-middleware');
	app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
	app.use(express.static('dist'));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(3000, () => console.log('Serving on port 3000'));
