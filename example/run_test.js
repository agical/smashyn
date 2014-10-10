var curl = require('../node_modules/curl-amd/dist/curl-for-ssjs/curl');

var conf = {
        baseUrl: __dirname,
        paths: {
            //app  : 'main.js',
            lodash: '../node_modules/lodash/lodash',
            multiplication: 'src/multiplication',
            square: 'src/square',
            multiplication_test: 'test/multiplication_test',
            square_test: 'test/square_test',
            promise_test: 'test/promise_test',
            report: '../src/console_log_results',
            checks: '../src/checks',
            smashyn: '../src/smashyn'
        },
        packages: [
            {
                name: 'when',
                location: '../node_modules/when',
                main: 'when'
            }
        ]
    };

curl.config(conf);

define("app", ['lodash', 'when', 'square_test', 'promise_test'], function(_, when, square_test, promise_test) {
    when.settle(square_test, promise_test).done(console.log);
});

curl("app").then(start, fail);

function start() {
    // No need to do anything
}

function fail(ex) {
    console.log(__filename, "Something went wrong:", ex);
}


