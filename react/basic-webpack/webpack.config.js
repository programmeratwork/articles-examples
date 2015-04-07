var webpack = require("webpack");

module.exports = {
    devtool: "eval",
    entry: [
        "webpack-dev-server/client?http://localhost:3000/dist/",
        "webpack/hot/only-dev-server",
        "./scripts/index"
    ],
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js",
        publicPath: "http://localhost:3000/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "jsxhint-loader" }
        ],
        loaders: [
            { test: /\.jsx?$/, loaders: ["react-hot", "babel-loader?optional=runtime"], exclude: /node_modules/ }
        ]
    },
    jshint: {
        camelcase: true,
        emitErrors: false,
        failOnHint: false,
        quotmark: "double",
        globals: {
            document: true
        }
    }
};
