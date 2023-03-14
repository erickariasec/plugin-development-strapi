module.exports = [
  {
    method: 'GET',
    path: '/config',
    handler: 'test.config',
    config: {
      policies: [],
      auth: false,
    },
  },
];
