var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry:"./src/index.js",
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/menu/menu.html"
    }
    )],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
           /* {
                test: /\.html$/,
                use: ["html-loader"]
            },*/
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }

        ]
    }
};