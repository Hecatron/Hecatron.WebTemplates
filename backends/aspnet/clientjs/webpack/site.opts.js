// Site Options
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const site_plugins = require('./site.plugins');
const site_rules = require('./site.rules');

// For the site typically we just specify the entry point script
var entrypoints = { 'main': './src/common/boot.ts' };


function opts(isDevBuild, bundleOutputDir) {
    return [{
        // If to run webpack in development or production
        mode: isDevBuild ? 'development' : 'production',
        // Helps speed up the build when building via Visual Studio
        //cache: {
        //    type: 'filesystem',
        //},
        // Style of output when running webpack
        stats: { modules: false },
        // Entry points of the js to start with when packing.
        entry: entrypoints,
        // Plugins
        plugins: site_plugins.plugins(isDevBuild, bundleOutputDir),
        // Define rules / loaders for loading other related files
        module: { rules: site_rules.rules(isDevBuild) },
        // The base directory for the js source
        context: path.join(__dirname, '..'),
        // This should be set to false when SourceMapDevToolPlugin is used instead
        devtool: false,
        // Allow the use of the import statement in js without the need of the below file extensions.
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.json'],
            // Allow import from common as: import 'common/xxx'
            alias: { 'common': path.resolve(__dirname, '../src/common/') }
        },
        devServer: {
            // Port the web client will connect to
            port: 3001,
            // Proxy connection to the server underneath
            proxy: {
                '/': {
                    target: 'http://localhost:3000',
                    changeOrigin: true
                }
            },
            // For when there's no proxy
            //contentBase: path.resolve(__dirname, '../../wwwroot/'),
            //historyApiFallback: {
            //    index: 'index.html'
            //},
            // updates the content on page without a full page reload
            hot: true,
            // Needed for debugging
            writeToDisk: true
        },
        // Output destination
        output: {
            // Destination Directory
            path: bundleOutputDir,
            // Output relative to the site root
            publicPath: '/dist/',
            filename: '[name].js'
        },
        // Terser options for shrinking js files for production
        optimization: !isDevBuild ? {
            minimizer: [new TerserPlugin({
                terserOptions: { sourceMap: true }
            })]
        } : {}
    }];
};

exports.opts = opts;
