var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var autoprefixer = require('autoprefixer')
var precss = require('precss')
var cssnext = require('postcss-cssnext')
var postcssImport = require('postcss-import')

module.exports = {
  devtool: '#source-map',
  entry: {
    'build': './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: path.join('static', '[name].[chunkhash].js'),
    chunkFilename: path.join('static', '[id].[chunkhash].js')
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  vue: {
    postcss: webpack => [
      postcssImport({
        addDependencyTo: webpack
      }), precss, cssnext,
    ],
    autoprefixer: false
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  postcss: function() {
    return [autoprefixer, cssnext, precss]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // extract css into its own file
    // new ExtractTextPlugin(path.join(config.build.assetsSubDirectory, '[name].[contenthash].css')),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: 'index.build.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]

}