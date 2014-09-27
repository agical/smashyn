define(['lodash'], function(_) {
    return {
        load: function (name, req, onload, config) {
            req([name], function (value) {
                console.log(__filename, "\nTo test:", value, value.test, value.result);
                var result = _.mapValues(value.test, function(test) {
                    return test(function(a, b) {
                        console.log( "Comparing", a, b);
                        return a===b;});
                });
                console.log("Result", result);
                
                onload(value.result);
            },
            function(err) {
                console.log(__filename, "Err:", err);
            });
        }
    }});
