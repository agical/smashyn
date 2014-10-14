var fs = require('fs');
var path = require('path');
var _ = require('./node_modules/lodash/lodash');

var curl = require('./node_modules/curl-amd/dist/curl-for-ssjs/curl');


var walk = function(dir, done) {
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
    paths: {
        lodash: 'node_modules/lodash',
        multiplication: 'example/src/multiplication',
        square: 'example/src/square',
        report: 'src/console_log_results',
        checks: 'src/checks',
        smashyn: 'src/smashyn',
        //app  : 'main.js',
        //multiplication_test: 'test/multiplication_test',
        //square_test: 'test/square_test',
        //promise_test: 'test/promise_test',
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

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    var tests = 
        _.chain(results)
        .filter(function(p) {
            return endsWith(p, ".js") &&
            p.indexOf('.#')===-1;
        })
        .map(function(p) {
            return {
                name: path.basename(p, '.js'),
                path: p
            };
        }).value();
    
    _.each(tests, function(desc) {
        console.log(desc);
        baseconf.paths[desc.name] = desc.path;
    });

    console.log(baseconf);
    curl.config(baseconf);

    var paramArr = _.reduce(tests, function(acc, elem) {
        acc.push(elem.name);
        return acc;
    }, ['when']);

    console.log(paramArr);

    define("app", paramArr, 
           function(when) {
        console.log(args);
        //when.settle(modules).done(console.log);
    });


    curl("app").then(start, fail);

    function start() {
        // No need to do anything
    }

    function fail(ex) {
        console.log(__filename, "Something went wrong:", ex);
    }



});


