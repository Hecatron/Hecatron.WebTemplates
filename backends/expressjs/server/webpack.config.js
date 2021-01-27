// App webpack config
// This file typically brings in any js that's unique to the application.

const path = require('path');
const bundleOutputDir = path.join(__dirname, '/build');
const app_opts = require('./webpack/app_opts');

// Pulls in the options / rules / plugins from the webpack directory
module.exports = (env, argv) => {
  const isDevBuild = !((argv && argv.mode === 'production') || process.env.NODE_ENV === 'production');
  console.log(`Development build: ${isDevBuild}`);
  return app_opts.opts(isDevBuild, bundleOutputDir);
};
