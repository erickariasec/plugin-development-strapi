"use strict";

/**
 *   controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("plugin::global.test", {
  async config(ctx) {
    ctx.body = await strapi.plugin("global").service("test").config();
  },
});
