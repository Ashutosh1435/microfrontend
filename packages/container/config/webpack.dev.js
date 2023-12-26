// Used to merging the two & more webpack configs
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
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
        auth: "auth@http://localhost:8082/remoteEntry.js",
      },
      // shared option is added for sharing the common modules,
      // to optimize performance of application
      shared: packageJson.dependencies,
      // shared: ['react', 'react-dom'],
    }),
  ],
};
// here devconfig comes later means it would reassign (update)
// any common config with commonConfig
module.exports = merge(commonConfig, devConfig);
