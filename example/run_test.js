var run = require('../runner').run;
var path = require('path');

var conf = {
    baseUrl: __dirname,
    testRoot: 'test',
//    includeTestFileFn: function(p) { ... match included test files ...} 
    paths: {
        lodash: '../node_modules/lodash',
        multiplication: 'src/multiplication',
        square: 'src/square',
// Can be configured
        report: '../src/console_log_results',
        checks: '../src/checks',
        smashyn: '../smashyn',
    },
    packages: [
        {
            name: 'when',
            location: '../node_modules/when',
            main: 'when'
        }
    ]
};

run(conf);
