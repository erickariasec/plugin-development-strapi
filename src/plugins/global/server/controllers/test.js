"use strict";

/**
 *   controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("plugin::global.test", ({ strapi }) => ({
  async config(ctx) {
    ctx.body = await strapi.plugin("global").service("test").config();
  },


  // async updateConfig(ctx) {
  //   try {
  //     const config = await strapi.plugin("global").service("test").updateConfig();
  //     ctx.body = config;
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // },


  async updateConfig(ctx) {
    try {
      const { version, slogan } = ctx.request.body.data;

      console.log(ctx.request.body.data);

      const updatedConfig = await strapi
        .plugin("global")
        .service("test")
        .updateConfig({
          version,
          slogan,
        });

      ctx.send(updatedConfig);
    } catch (err) {
      strapi.log.error("updateConfig(): ", err);
      ctx.badRequest("Failed to update config.");
    }
  },
}));
