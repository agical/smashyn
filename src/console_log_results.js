define([], function() {
    return { 
        module_started: function(obj) {
            console.log(obj.module, 'started...');
        },
        module_passed: function(obj) {
            console.log(obj.module, 'OK!');
        },
        scenario_started: function(obj) {
            console.log('\t', obj.module, obj.scenario, 'started...');
        },
        scenario_passed: function(obj) {
            console.log('\t', obj.module, obj.scenario, 'OK!');
        },
        check_passed: function(obj) {
            console.log('\t', '\t', obj.module, obj.scenario, obj.check);
        },
        module_failed: function(obj) {
            console.log("**", "FAILED:", obj.module, ' Reason: ', obj.error);
        },
        scenario_failed: function(obj) {
            console.log('\t', "****", "FAILED:", obj.module, obj.scenario);
        },
        check_failed: function(obj) {
            console.log('\t', '\t', "******", "FAILED:", obj.module, obj.scenario, obj.check);
        },
        error: function(obj) {
            console.log("* GENERAL ERROR:\n", obj);
        }
    };
            
});
