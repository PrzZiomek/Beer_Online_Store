const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {

    mode: "development",
    
    entry: "./src/index.js",

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    devServer: {
       filename:  "main.js",
       publicPath: "/dist/main.scss",
       port: 3000,
       proxy: {
           '/api': {
               target: "http://localhost:8080/",
               secure: false,
           }
       }
    },

    module: {
        rules: [

            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },     
          
            {
                test: /\.scss$/,
                use: [          
                       "style-loader",
                       "css-loader",                      
                       "sass-loader"
                    ],
            },

            {
                test: /\.module\.s(a|c)ss$/,            
                loader: [          
                       MiniCssExtractPlugin.loader,
                       {
                        loader: "css-loader",
                        options: { 
                            modules: true,
                            sourceMap: isDevelopment, 
                        }
                       },
                       {
                        loader: "sass-loader",
                        options: { 
                            sourceMap: isDevelopment,
                        }
                       }                    
                       
                    ],
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
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].scss",
            chunkFilename: "[id].scss"
        })
    ],


}



// node_modules/.bin/webpack-dev-server