define([], function() {
    return { 
        module_started: function(obj) {
            console.log(obj.module, 'started...');
        },
        module_passed: function(obj) {
            console.log(obj.module, ' OK!');
        },
        scenario_passed: function(obj) {
            console.log("  ", obj.scenario);
        },
        check_passed: function(obj) {
            console.log("    ", obj.check);
        },
        module_failed: function(obj) {
            console.log("**", "FAILED:", obj.module, ' Reason: ', obj.error);
        },
        scenario_failed: function(obj) {
            console.log("****", "FAILED:", obj.scenario);
        },
        check_failed: function(obj) {
            console.log("******", "FAILED:", obj.check);
        },
        error: function(obj) {
            console.log("* GENERAL ERROR:\n", obj);
        }
    };
            
});
