const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(
        {
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: 'babel-loader'
                    },
                    {
                        test: /\.(css|scss)$/,
                        use: [
                          "style-loader", // creates style nodes from JS strings
                          "css-loader", // translates CSS into CommonJS
                          "sass-loader" // compiles Sass to CSS, using Node Sass by default
                        ]
                      },
                      {
                            test: /\.css$/,
                            include: [
                                path.resolve(__dirname, "not_exist_path")
                            ],
                            loader: "style!css"
                        },
                      {
                        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                        loaders: 'file-loader',
                        include: path.join(__dirname, 'src')
                      }
                    ]
            },

            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        },
        modeConfiguration(mode)
    );
};
