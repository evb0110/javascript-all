const path = require("path");

module.exports = {
  mode: "development",
  entry: [
    'babel-polyfill',
    "./src/app.js"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    open: true
  }
};
