const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  externals: {
    react: 'React',
    axios: 'axios',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://api.themoviedb.org/3/'),
      'process.env.API_KEY': JSON.stringify('e9606ac55519519ca9f962386db69c10'),
      'process.env.API_LANGUAGE': JSON.stringify('pt-BR'),
      'process.env.API_PREFIX_URL_IMG': JSON.stringify('http://image.tmdb.org/t/p/w300')
    }),
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    })
  ]
})
