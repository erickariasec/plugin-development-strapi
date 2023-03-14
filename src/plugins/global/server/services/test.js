'use strict';

/**
 *  service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService("plugin::global.test", {
  async config() {
    const count = await strapi.query("plugin::global.test").count();
    // const content = await strapi.query("plugin::global.test").findOne({
    //   attributes: {
    //     version: "",
    //   },
    // });
    const { version } = await strapi
      .query("plugin::global.test")
      .findOne({}, ["version"]);
    const { slogan } = await strapi
      .query("plugin::global.test")
      .findOne({}, ["slogan"]);
    return {
      count,
      version,
      slogan,
    }
  },
});
