import webpack from 'webpack'

export default {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://0.0.0.0:5000',
        './src/main.js'
    ],

    devtool: "eval-source-map",

    output: {
        path: `${__dirname}/dist`,
        filename: "js/bundle.js"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        colors:true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel?cacheDirectory',
                exclude: /node_modules/
            },
            { test: /\.css$/, loaders: ["style", "css?sourceMap"] },
            {test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png'},
            {test: /\.jpe?g$/, loader: 'url?limit=8192&mimetype=image/jpg'},
            {test: /\.gif$/, loader: 'url?limit=8192&mimetype=image/gif'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
        ]
    }
};