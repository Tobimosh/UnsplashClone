const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@/composables": path.resolve(__dirname, "src/composables"),
      },
    },
  },
});
