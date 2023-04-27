const { defineConfig } = require("@vue/cli-service");
// import { defineConfig } from "@vue/cli-service";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
  },
});
