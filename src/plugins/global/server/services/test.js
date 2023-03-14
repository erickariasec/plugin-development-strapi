"use strict";

module.exports = ({ strapi }) => ({
  async config() {
    return await strapi.query("plugin::global.test").count();
  },
});
