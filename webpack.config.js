var webpack = require('webpack');
const path = require('path');



module.exports = {
    mode: 'development',
    entry: [ 
        './web/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],  
                    }
                },
            }
        ]
    },
    devServer: {
        contentBase: './web',
        hot: true
      },
    output: { 
        path: path.resolve(__dirname, './web'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.IgnorePlugin(/react-native/), 
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        warnings: true,
    },
    resolve: {
        mainFiles: ['index.web.js','index.js']
      }
};