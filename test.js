
var curl = require('./node_modules/curl-amd/dist/curl-for-ssjs/curl');
console.log(curl);
curl.config({
        baseUrl: __dirname,
        paths: {
             app: 'main.js'
        }
    });
curl(['app']).then(start, fail);

function start() {
    console.log("STARTING:");
}

function fail(ex) {
    console.log(ex);
}


