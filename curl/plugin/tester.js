define([], function() {
    return {
        load: function (name, req, onload, config) {
            req([name], function (value) {
                console.log(__filename, "\nTo test:", value);
                console.log(__filename, "\nonload:", onload);
                onload.fromText(value);
            },
            function(err) {
                console.log(__filename, "Err:", err);
            });
        }
    }});
