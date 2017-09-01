const path = require('path')

const config = {
  context: __dirname,
  entry: './js/ClientApp.js',
/*
    devtool: 'eval',
*/
  output: {
    path: path.join(__dirname, '/_public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/_public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}


if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.js';
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
