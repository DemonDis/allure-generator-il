const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const sass = require("sass");
const utils = require("./utils.js");

const commonConfig = require("./webpack.common.js");

const ENV = "development";

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    plugins: [require("autoprefixer")()],
  },
};

module.exports = options =>
  webpackMerge(commonConfig({ env: ENV }), {
    devtool: "cheap-module-source-map",
    mode: ENV,
    entry: ["./src/main/javascript/index.js"],
    output: {
      path: utils.root("report"),
      publicPath: "/",
      filename: "app.js",
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            postcssLoader,
            {
              loader: "sass-loader",
              options: { implementation: sass },
            },
          ],
        },
      ],
    },
    devServer: {
      stats: options.stats,
      hot: true,
      contentBase: "./report",
      historyApiFallback: true,
      watchOptions: {
        ignored: /node_modules/,
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: "./report/index.html",
        favicon: "./report/favicon.ico"
      }),
    ],
  });
