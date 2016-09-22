module.exports = {
  entry: './app/assets/frontend/main.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  // ,
  // don't bundle react npm package, this is included in rails'
  // externals: {
  //   'react': 'React'
  // }
};
