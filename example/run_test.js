
var curl = require('./node_modules/curl-amd/dist/curl-for-ssjs/curl');

curl.config({
        baseUrl: __dirname,
        paths: {
            app  : 'main.js',
            lodash: 'node_modules/lodash/lodash',
            multiplication: 'src/multiplication',
            multiplication_test: 'test/multiplication_test',
            square: 'src/square',
            square_test: 'test/square_test',
            report: 'console_log_results'
        },
        packages: [
            {
                name: 'when',
                location: 'node_modules/when',
                main: 'when'
            }
        ]
        ,
        plugins: {
             prereq: '../../prereq.js'            
        }
    });
curl(['app']).then(start, fail);

function start() {
    console.log(__filename, "Done");
}

function fail(ex) {
    console.log(__filename, "Something went wrong:", ex);
}


