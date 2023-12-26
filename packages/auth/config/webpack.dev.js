// Used to merging the two & more webpack configs
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
      // shared: ['react', 'react-dom'],
    }),
  ],
};
// here devconfig comes later means it would reassign (update)
// any common config with commonConfig
module.exports = merge(commonConfig, devConfig);
