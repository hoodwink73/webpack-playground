const CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    main: './scripts/main.js',
    other: './scripts/other.js'
  },
  output: {
    filename:'[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new CommonsPlugin({
      minChunks: 2,
      name: 'common'
    })
  ]
};
