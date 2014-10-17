var run = require('./src/runner').run;
var path = require('path');

var conf = {
    baseUrl: __dirname,
    testRoot: 'example/test',
//    includeTestFileFn: function(p) { ... match included test files ...} 
    paths: {
        lodash: 'node_modules/lodash',
        multiplication: 'example/src/multiplication',
        square: 'example/src/square',
        report: 'src/console_log_results',
        checks: 'src/checks',
        smashyn: 'src/smashyn',
    },
    packages: [
        {
            name: 'when',
            location: 'node_modules/when',
            main: 'when'
        }
    ]
};

run(conf);
