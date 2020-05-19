const path = require("path");
//const MediaQueryPlugin  = require("media-query-plugin");
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {

    mode: "development",
    
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [

            {
                test: /\.scss$/,
                use: [          
                       "style-loader",
                       "css-loader",                      
                       "sass-loader"
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
    }

}





/*


 plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].scss",
            chunkFilename: "[id].scss"
        })
    ],

        {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
        },



        {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
        },




        {
                test: /\.scss$/,
                use: [          
                        "style-loader",   // replaced MiniCssExtractPlugin.loader,  
                        {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                        },
                        
                        MediaQueryPlugin.loader,
                        "sass-loader"
                    ],
                    include: /\.module\.scss$/
            },

            {
                test: /\.scss$/,
                use: [          
                        "style-loader",                        
                        "css-loader",                     
                        MediaQueryPlugin.loader,
                        "sass-loader"
                    ],
                    exclude: /\.module\.scss$/
            },
*/