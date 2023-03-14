'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('global')
      .service('myService')
      .getWelcomeMessage();
  },
});
