"use strict";

module.exports = {
  async config(ctx) {
    ctx.body = await strapi.plugin("global").service("test").config();
  },
};
