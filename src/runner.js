var _ = require('../node_modules/lodash/lodash');
var curl = require('../node_modules/curl-amd/dist/curl-for-ssjs/curl');

var walk = require('./walker').walk;

var path = require('path');

exports.matchJsFiles =  function(p) {
    return p.match(/.*.js$/);
};

exports.mapFile = function(p) {
    return {
        name: path.basename(p, '.js'),
        path: p
    };
};


exports.run = function(baseconf) {
    walk(path.join(baseconf.baseUrl, baseconf.testRoot), function(err, results) {
        if (err) throw err;

        var tests = 
            _.chain(results)
            .filter(baseconf.includeTestFileFn||exports.matchJsFiles)
            .map(baseconf.testFileMappingFn||exports.mapFile).value();
        
        _.each(tests, function(desc) {
            baseconf.paths[desc.name] = desc.path;
        });

        curl.config(baseconf);

        var paramArr = _.reduce(tests, function(acc, elem) {
            acc.push(elem.name);
            return acc;
        }, []);

        define("app", paramArr, function() {});

        curl("app").then(start, fail);

        function start() {
            // No need to do anything
        }

        function fail(ex) {
            console.log("Something went wrong (",  __filename, "):\n", 
                        ex, 
                        "\nUsed conf:\n", 
                        baseconf);
        }
    });
};
