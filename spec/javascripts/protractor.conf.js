exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:3000',
  chromeOnly: true,
  onPrepare: function(){
    require('protractor-http-mock').config = {
      rootDirectory: process.cwd(),
      protractorConfig: 'spec/javascripts/protractor.conf.js'
    };
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
};
