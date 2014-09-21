define([], function() {
    return {
        load: function (name, req, onload, config) {
            //req has the same API as require().
            req([name], function (value) {
                console.log("\nValue:", value);
                onload(value.result);
            },
            function(err) {
                console.log("Err:", err);
            });
        }
    }});
