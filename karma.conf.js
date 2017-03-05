module.exports = function karmaConfig(config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    files: ['tests.js'],
    preprocessors: {
      'tests.js': ['webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  })
}
