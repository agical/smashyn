define([], function() {
    return { 
        module_passed: function(obj) {
            console.log("- ", obj);
        },
        scenario_passed: function(obj) {
            console.log("    - ", obj);
        },
        check_passed: function(obj) {
            console.log("      -", obj);
        },
        module_failed: function(obj) {
            console.log("* ", obj);
        },
        scenario_failed: function(obj) {
            console.log("    * ", obj);
        },
        check_failed: function(obj) {
            console.log("      * ", obj);
        },
        error: function(obj) {
            console.log("*#@:", obj);
        }
    };
            
});
