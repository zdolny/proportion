const path = require('path');

module.exports = (env) => {
  const environment = env || 'production';

  return {
    mode: environment,
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'docs')
    }
  }
};