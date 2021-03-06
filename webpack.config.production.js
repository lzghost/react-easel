const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './src/react-formbuilder',
  output: {
    path: __dirname + "/lib",
    filename: "react-formbuilder.js",
    library: 'react-formbuilder',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  target: 'web',
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: ['react'],
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: ['react-dom'],
      amd: 'react-dom'
    },
    uniforms: {
      root: 'uniforms',
      commonjs2: 'uniforms',
      commonjs: ['uniforms'],
      amd: 'uniforms'
    },
    'uniforms-bootstrap4': {
      root: 'uniforms-bootstrap4',
      commonjs2: 'uniforms-bootstrap4',
      commonjs: ['uniforms-bootstrap4'],
      amd: 'uniforms-bootstrap4'
    }
  }],
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
