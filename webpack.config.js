const HtmlWebpackPlugin = require('html-webpack-plugin'); // Permite trabajar con html y wp
const CopyWebpackPlugin = require('copy-webpack-plugin'); //para trabajar con css

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },//BABEL//
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },//PLUGINS//
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin([
      {
        from: './src/styles/App.css',
        to: ''
      }
    ])
  ]
}