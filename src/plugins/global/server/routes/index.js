module.exports = [
  {
    method: "GET",
    path: "/config",
    handler: "test.config",
    config: {
      policies: [],
      auth: false,
    },
  },
  // {
  //   method: "GET",
  //   path: "/findRandom",
  //   handler: "task.findRandomTask",
  //   config: {
  //     policies: [],
  //     auth: false,
  //   },
  // },
];
