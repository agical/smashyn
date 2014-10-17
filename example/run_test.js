var run = require('../runner').run;
var path = require('path');

var conf = {
    baseUrl: __dirname,
    // Directory for tests. All js 
    // files in this directory tree
    // will ne included by default:
    testRoot: 'test',
    // Change included test files by including 
    // the following function
    // includeTestFileFn: function(p) { return true/false to match included test files ...} 
    paths: {
        // Code to test
        multiplication: 'src/multiplication',
        square: 'src/square',
        // Modules. Add your own. Smashyn requires lodash. 
        lodash: '../node_modules/lodash',
        // Smashyn runner
        smashyn: '../smashyn',
        // Smashyn utils, can be configured
        report: '../src/console_log_results',
        checks: '../src/checks',
    },
    // Smashyn also requires when
    packages: [
        {
            name: 'when',
            location: '../node_modules/when',
            main: 'when'
        }
    ]
};

// Execute tests in conf by loading them.
run(conf);
