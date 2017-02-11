const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname, '/dist')));

// only use dev middleware if working in development
app.use(webpackDevMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));


module.exports = app;
