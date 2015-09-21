module.exports = {
  entry: './js/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }]
  }
};
