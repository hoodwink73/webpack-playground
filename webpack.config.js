module.exports = {
  entry: {
    main: './scripts/main.js'
  },
  output: {
    filename:'bundle.js'
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
  }
};
