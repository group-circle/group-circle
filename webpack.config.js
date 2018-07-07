const webpack = require('webpack')
const path = require('path')

// const extractCommons = new config.optimization.splitChunks({
//     name: 'commons',
//     filename: 'common.js'
// })

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractCSS = new ExtractTextPlugin('[name].bundle.css')
const config = {
    context: __dirname,
    entry: './client/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public/javascript'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '.'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ]
                    }
                }]
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty'
    }
}

module.exports = config