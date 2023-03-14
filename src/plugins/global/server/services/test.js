'use strict';

/**
 *  service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService("plugin::global.test", {
  async config() {
    return await strapi.query("plugin::global.test").count();
  },
});
