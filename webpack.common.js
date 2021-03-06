var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry:{
      main:  "./src/index.js",
      page: "./src/page.js"
    },
    
    plugins: [new HtmlWebpackPlugin({
        template: "./src/menu/menu.html",
        filename: "menu.html",
        chunks: ["main"]
    }
    ),
    new HtmlWebpackPlugin({
        template: "./src/page/page.html",
        filename: "page.html",
        chunks: ["page"]
    }
    )

],
    module: {
        rules: [
            
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
            ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }

        ]
    }
};