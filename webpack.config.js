// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
    const isProduction = env === 'production';

    return {
   
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename:"bundle.js"
        },
        mode: 'production',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        performance: {
                 hints: process.env.NODE_ENV === 'production' ? "warning" : false
            },
          plugins: [
              new MiniCssExtractPlugin({
                  filename: 'styles.css'
              })
          ],
          devtool: isProduction ? 'source-map' : 'inline-source-map',
          devServer: {
                contentBase: path.join(__dirname, 'public'),
                historyApiFallback: true,
                publicPath: '/dist/'
          }
    }
};




// // entry -> output
// const path = require('path');

// // console.log(__dirname);
// // console.log(path.join(__dirname, 'public'));

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// module.exports = (env) => {
//     const isProduction = env === 'production';
//     // console.log('env', env);
//     const CSSExtract = new ExtractTextPlugin('styles.css');

//     return {
   
//         entry: './src/app.js' /*'./src/playground/redux-101.js'*/ /*'./src/playground/destructuring'*/ /*'./src/playground/redux-expensify.js'*/ /*'./src/playground/hoc.js'*/ /*'./src/playground/redux-hamam.js'*/,
//         output: {
//             path: path.join(__dirname, 'public'),
//             filename:"bundle.js"
//         },
//         // mode: 'production',
//         module: {
//             rules: [{
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             },{
//                 test: /\.s?css$/,
//                 use: CSSExtract.extract({
//                     use: [
//                         'css-loader',
//                         'sass-loader'
//                     ]
//                 })
//             }]
//         },/*
//           performance: {
//             hints: process.env.NODE_ENV === 'production' ? "warning" : false
//           },*/
//           plugins: [
//               CSSExtract
//           ],
//           devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
//           devServer: {
//                 contentBase: path.join(__dirname, 'public'),
//                 historyApiFallback: true
//           }
//     }
// };