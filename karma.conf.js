// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/githubaction'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    // customLaunchers: {
    //     ChromeWithoutSecurity: {
    //         base: 'Chrome',
    //         flags: [ '--disable-web-security' ]
    //     },
    //     IE9: {
    //         base: 'IE',
    //         'x-ua-compatible': 'IE=EmulateIE9'
    //     },
    //     IE10: {
    //         base: 'IE',
    //         'x-ua-compatible': 'IE=EmulateIE10'
    //     },
    //     FirefoxHeadless: {
    //         base: 'Firefox',
    //         flags: [ '-headless' ]
    //     },
    //     OperaHeadless: {
    //         base: 'Opera',
    //         flags: [ '-headless' ]
    //     }
    // },
    browsers: ['ChromeHeadless'],//'Chrome', 'Chrome_without_security'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser
    // customLaunchers: {
    //   Chrome_without_security: {
    //     base: 'Chrome',
    //     flags: ['--disable-web-security', '--disable-site-isolation-trials']
    //   }
    // },
    singleRun: false,
    restartOnFileChange: true
  });
};
