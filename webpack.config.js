const path = require('path')

module.exports = {
    mode: 'development',
    entry:  ["regenerator-runtime/runtime.js",'./src/app.js'],
    //'./src/playground/db-1.js',
    // './src/app.js',
    //'./src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/,

        },    {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {

        static: {
            directory: path.join(__dirname, 'public')
        },
        historyApiFallback: true
    }
}