// Vendor Rules
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function rules(isDevBuild) {
    return [

        // Vanilla CSS
        { test: /\.css$/, use:
            [MiniCssExtractPlugin.loader, isDevBuild ?
                { loader: 'css-loader', options: { sourceMap: true } } :
                { loader: 'css-loader' }
            ] },

        // Scss (css) files
        { test: /\.(sass|scss)$/, use: isDevBuild ?
            // Development - vendor.css
            [MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
                { loader: 'sass-loader', options: { sassOptions: { includePaths: ['css', 'node_modules'] }, sourceMap: true } }
            ] :
            // Production - vendor.css
            [MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { importLoaders: 1 } },
                { loader: 'sass-loader', options: { sassOptions: { includePaths: ['css', 'node_modules'] } } }
            ]
        },

        // images
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use:
            [{ loader: 'url-loader', options: { name: '[name].[hash].[ext]', outputPath: 'img/', limit: 100000 } }]
        },

        // Fonts
        { test: /.(ttf|otf|eot|svg|woff(2)?)$/, use:
            [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/' } }]
        }

    ];
};

exports.rules = rules;
