const NodeExternals = require( "webpack-node-externals" );

module.exports = {
    name: 'server',
    target: 'node',
    entry: './app/app.ts',
    externals: [ NodeExternals() ],
  //  devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      inline: false
    },
    node: {
      fs: 'empty',
      net: "empty",
      tls: "empty"
    }
  };
  