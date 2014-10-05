define(['lodash', 'when', 'report', 'checks'], function(_, when, report, checks) {

    var smashyn = function(tob) {
        var tests = tob.tests;
        var mspec = {'module':tob.module};            
        
        report.module_started(mspec);

        var result = _.reduce(tob.scenarios, function(acc, test_fn, scenario) {
            var scen_d = when.defer();

            var spec = {'scenario':scenario, 'module':tob.module};
            report.scenario_started(spec);

            when.attempt(test_fn, checks(tob.module, scenario, report))
                .then(function() {
                    report.scenario_passed(spec);
                    scen_d.resolve(spec);
                }).otherwise(function(e) {
                    spec['error']=e;
                    report.scenario_failed(spec);
                    scen_d.reject(spec);
                });
            
            acc[scenario] = scen_d.promise;
            return acc;                   
        }, {});


        return when.all(_.values(result)).then(function() {                    
            report.module_passed(mspec);
            return tob.result;                                    
        }, function(e) {  
            mspec['error'] = e;
            report.module_failed(mspec);
            throw e;
        });
    };

    return smashyn;
});
