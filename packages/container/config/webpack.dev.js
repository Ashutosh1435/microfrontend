// Used to merging the two & more webpack configs
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared option is added for sharing the common modules,
      // to optimize performance of application
      shared: packageJson.dependencies,
      // shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
// here devconfig comes later means it would reassign (update)
// any common config with commonConfig
module.exports = merge(commonConfig, devConfig);
