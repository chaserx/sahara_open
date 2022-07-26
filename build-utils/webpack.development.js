module.exports = () => ({
  mode: "development",
  module: {
    rules: [
      {
        test: /\.sa?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
