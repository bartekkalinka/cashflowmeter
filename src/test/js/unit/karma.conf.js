module.exports = function(config){
  config.set({

    basePath : '../../../',

    files : [
      'main/resources/client/bower_components/angular/angular.js',
      'main/resources/client/bower_components/angular-route/angular-route.js',
      'main/resources/client/bower_components/angular-resource/angular-resource.js',
      'main/resources/client/bower_components/angular-mocks/angular-mocks.js',
      'main/resources/client/js/**/*.js',
      'test/js/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};