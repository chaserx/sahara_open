// From: https://blog.logrocket.com/versatile-webpack-configurations-for-your-react-application-e6ebf6615cc/

const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// NOTE(chaserx): i can't this to work correctly. doesn't seem to pickup the env flag
const modeConfiguration = env => require(`./build-utils/webpack.${env}.js`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
  console.log(`mode is: ${mode}`);

  return webpackMerge(
    {
      mode,
      entry: "./src/index.js",
      devServer: {
        hot: true,
        open: true
      },
      output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundled.js"
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
          },
          {
            test: /\.(scss|sass|css)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: './index.html',
          favicon: './public/favicon.ico',
          manifest: './public/manifest.json'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin()
      ]
    },
    modeConfiguration(mode)
  );
};
