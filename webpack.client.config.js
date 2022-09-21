const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildDirectory = 'dist';

const outputDirectory = buildDirectory + '/client';

module.exports = {

  mode: 'development',

  entry: './src/client/index.js',

  output: {

    path: path.join(__dirname, outputDirectory),

    filename: 'bundle.js'

  },

  module: {

    rules: [

      {

        test: /\.js$/,

        exclude: /node_modules/,

        use: {

          loader: 'babel-loader'

        }

      },

      {

        test: /\.css$/,

        use: ['style-loader', 'css-loader']

      }
    ,

    ]

  },

  devServer: {

    allowedHosts: ['ec2-52-23-206-214.compute-1.amazonaws.com'],
    port: 3000,

    open: true

  },

  plugins: [

    new CleanWebpackPlugin({

      cleanOnceBeforeBuildPatterns: [path.join(__dirname,

      buildDirectory)]

    }),

    new HtmlWebpackPlugin({

      template: './public/index.html'

    })

  ]

};
