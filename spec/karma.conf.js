// Karma configuration
// Generated on Tue Jun 07 2016 15:22:31 GMT+0100 (BST)

module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
        'vendor/assets/bower_components/angular/angular.js',
        'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
        'app/assets/javascripts/**/*.js',
        'spec/javascripts/unit/**/*.js'
      ],

      autoWatch : true,

      frameworks: ['jasmine'],

      browsers : ['Chrome'],

      plugins : [
              'karma-chrome-launcher',
              'karma-jasmine',
              "karma-spec-reporter"
      ],
      reporters: ["spec"],
        specReporter: {
        maxLogLines: 5,
        suppressErrorSummary: true,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: true,
        showSpecTiming: false
      },
    });
};
