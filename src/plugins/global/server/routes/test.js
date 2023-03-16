"use strict";

/**
 *  router.
 */

module.exports = {
  type: "admin", // other type available: content-api.
  routes: [
    {
      method: "GET",
      path: "/config",
      handler: "test.config",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PUT",
      path: "/config",
      handler: "test.updateConfig",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
