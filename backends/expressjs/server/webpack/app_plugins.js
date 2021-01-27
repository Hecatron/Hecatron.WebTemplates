// App Plugins

const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function plugins(isDevBuild, bundleOutputDir) {
  return [

    // Set the NODE_ENV environment variable to production / development
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"' }),
    // Currently this seems slower - 
    //new ForkTsCheckerWebpackPlugin()

  ].concat(isDevBuild ? [

    // Plugins that apply in development builds only
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map', // Remove this line if you prefer inline source maps
      moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
    })

  ] : [

    // Plugins that apply in production builds only

  ]);
};

exports.plugins = plugins;
