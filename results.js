define([], function() {
    return { 
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
            console.log("**", obj.module, ' FAILED: ', obj.error);
        },
        scenario_failed: function(obj) {
            console.log("  **", obj.scenario);
        },
        check_failed: function(obj) {
            console.log("    **", obj.check);
        },
        error: function(obj) {
            console.log("*#@:", obj);
        }
    };
            
});
