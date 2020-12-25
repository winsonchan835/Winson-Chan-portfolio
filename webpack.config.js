const path = require('path')

module.exports = {
  entry: [
    './src/index.js',
    './src/index.css'
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          }
        ]
      }
    ]
  }
};
