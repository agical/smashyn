define(['tester!dep1', 'dep2'], function(dep1, dep2) {
    return {
        test: {
            'Testing dep2': function() {return dep2()=='Dep 2 ready';}
        },
        result: dep2
    }
});
