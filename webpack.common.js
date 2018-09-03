const path = require("path");

module.exports = {
  entry: {
      "./crea/js/crea": "./crea/js/scripts.js",
      "./landing/js/landing": "./landing/js/scripts.js",
      "./tour/scripts/tour": "./tour/scripts/tour.js"
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }  
};