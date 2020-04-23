const path = require("path");


module.exports = {

    mode: "development",
    
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules:[

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            {
                test: /\.html$/,
                use: ["html-loader"]
            },

            {
                test: /\.(svg|png|jpg|gif)$/i,
                use:[ 
                 {
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]',
                    },
                 },
                 {
                     loader: "url-loader",
                     options:{
                         limit: false,
                     }
                 }
            ]
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'[name].[ext]',
                  outputPath:'assets' 
                }
              }
        ]
    }

}