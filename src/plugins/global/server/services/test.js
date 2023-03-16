"use strict";

/**
 *  service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("plugin::global.test", ({ strapi }) => ({
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
    };
  },
  // async updateConfig(ctx) {
  //   const { version, slogan } = ctx.request.body;
  //   try {
  //     const updatedConfig = await strapi.query("plugin::global.test").update(
  //       { id: 1 }, // assuming you only have one record in the "plugin::global.test" content type
  //       { version, slogan } // the updated values for version and slogan
  //     );

  //     ctx.send(updatedConfig); // return the updated config as the response
  //   } catch (err) {
  //     strapi.log.error("updateConfig(): ", err);
  //     ctx.badRequest("Failed to update config");
  //   }
  // const count = await strapi.query("plugin::global.test").count();
  // const content = await strapi.query("plugin::global.test").findOne({
  //   attributes: {
  //     version: "",
  //   },
  // });
  // const { version } = await strapi
  //   .query("plugin::global.test")
  //   .update({}, ["version"]);
  // const { slogan } = await strapi
  //   .query("plugin::global.test")
  //   .update({}, ["slogan"]);
  // return {
  //   count,
  //   version,
  //   slogan,
  // };
  // },

  // async updateConfig() {
  //   try {
  //     const config = await strapi.query("plugin::global.test").findOne();
  //     return {
  //       version: config.version,
  //       slogan: config.slogan,
  //     };
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  async updateConfig({ version, slogan }) {
    try {
      const existingConfig = await strapi
        .query("plugin::global.test")
        .findOne();

      if (!existingConfig) {
        throw new Error("Config does not exist.");
      }

      if (!version || !slogan) {
        throw new Error("Invalid version or slogan data");
      }

      const updatedConfig = await strapi
        .query("plugin::global.test")
        .update({ id: existingConfig.id }, { version, slogan });

      return {
        data: updatedConfig,
      };
    } catch (err) {
      return err.message;
    }
  },
}));
