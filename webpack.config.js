const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './public/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // plugins: [
  // // Minify assets.
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false // https://github.com/webpack/webpack/issues/1496
  //     }
  //   })
  // ],
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['react', 'es2015'] // can add "es2015" to compile to es5
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015'] // can add "es2015" to compile to es5
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'bootstrap-sass$': 'bootstrap-sass/assets/stylesheets/bootstrap'
    }
  }
};
