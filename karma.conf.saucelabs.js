/*eslint no-unused-vars: "off"*/
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  config.set({
    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {test: /\.styl$/, loader: 'style!css!stylus'},
          {test: /\.css/, loader: 'style!css'},
          { test: /\.json$/, loader: 'json-loader' },
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/web\/lib/, /node_modules/, /server/],
            query: {
              plugins: ['istanbul']
            }
          },
        ]
      },

      stylus: {
        use: [require('jeet')(), require('rupture')()]
      },

      plugins: [
        new CopyWebpackPlugin([
          { from: './web/data/products.json' }
        ])
      ]
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false},
      {pattern: 'web/data/*.json', watched: false, included: false, served: true, nocache: false}
    ],

    proxies: {
      '/': '/base/web/data/'
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'lcov'},
        {type: 'text'}
      ]
    },

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpackServer: {
      noInfo: true
    },

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    autoWatch: false,
    autoWatchBatchDelay: 100,
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl', 'coverage'],
    singleRun: true
  });
};
