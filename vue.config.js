const configureAPI = require("./src/server/configure");

module.exports = {
  devServer: {
    before: configureAPI,
  },
  configureWebpack: {
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Queue";
      return args;
    });
  },
};
