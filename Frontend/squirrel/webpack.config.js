webpack = require('webpack')
module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'views/bundle.js'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015']
                }
              // options: {
              //   cacheDirectory: true
              // }
            }
          ]
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          // scss compile
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //   include: /\.js$/,
      //   compress: {
      //     warnings: false
      //   },
      //   minimize: true
      // }),
    ]
  }
}
