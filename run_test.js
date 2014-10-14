var fs = require('fs');
var path = require('path');
var _ = require('./node_modules/lodash/lodash');

var curl = require('./node_modules/curl-amd/dist/curl-for-ssjs/curl');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}


function walk(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

var baseconf = {
    baseUrl: __dirname,
    testRoot: 'example/test',
    includeTestfileFn: function(p) {
            return endsWith(p, ".js") &&
            p.indexOf('.#')===-1;
        },
    testFileMapping: function(p) {
            return {
                name: path.basename(p, '.js'),
                path: p
            };
        },
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


walk(path.join(baseconf.baseUrl, baseconf.testRoot), function(err, results) {
    if (err) throw err;

    var tests = 
        _.chain(results)
        .filter(baseconf.includeTestfileFn)
        .map(baseconf.testFileMapping).value();
    
    _.each(tests, function(desc) {
        baseconf.paths[desc.name] = desc.path;
    });

    curl.config(baseconf);

    var paramArr = _.reduce(tests, function(acc, elem) {
        acc.push(elem.name);
        return acc;
    }, ['when']);

    define("app", paramArr, 
           function(when) {
        //when.settle(modules).done(console.log);
    });

    curl("app").then(start, fail);

    function start() {
        // No need to do anything
    }

    function fail(ex) {
        console.log("Something went wrong (",  __filename, "):\n", ex, "\nUsed conf:\n", baseconf);
    }



});


