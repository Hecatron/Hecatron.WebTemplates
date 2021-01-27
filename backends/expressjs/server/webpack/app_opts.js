// App Options

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const app_plugins = require('./app_plugins');
const app_rules = require('./app_rules');
const nodeExternals = require('webpack-node-externals');

// For the site typically we just specify the entry point script
var entrypoints = { 'main': './src/index.ts' };

function opts(isDevBuild, bundleOutputDir) {

  return [{
    // If to run webpack in development or production
    mode: isDevBuild ? 'development' : 'production',
    // Style of output when running webpack
    stats: { modules: false },
    // Entry points of the js to start with when packing.
    entry: entrypoints,
	  // Target is a node application
    target: 'node',
    // Plugins
    plugins: app_plugins.plugins(isDevBuild, bundleOutputDir),
    // Define rules / loaders for loading other related files
    module: { rules: app_rules.rules(isDevBuild) },
    // This should be set to false when SourceMapDevToolPlugin is used instead
    devtool: false,
    // Allow the use of the import statement in js without the need of the below file extensions.
    resolve: {
      extensions: ['.js', '.ts'],
    },
    // Output destination
    output: {
      // Destination Directory
      path: bundleOutputDir,
      filename: 'index.js'
    },
    // Avoid building in node_modules content to the final output
    externals: [ nodeExternals({
      // Read from package.json to figure out what to exlude, instead of looking at node_modules
	  // Seems to work for yarn pnp
      modulesFromFile: true,
	})],
    // Terser options for shrinking js files for production
    optimization: !isDevBuild ? {
      minimizer: [new TerserPlugin({
        terserOptions: { sourceMap: true }
      })]
    } : {},
	cache: { type: 'filesystem' }
    //watch: isDevBuild,
  }];

};

exports.opts = opts;
