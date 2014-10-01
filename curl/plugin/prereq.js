define(['lodash', 'report', 'when', 'checks'], function(_, report, when, checks) {

    return {
        load: function (module, req, onload, config) {
            req([module], function (value) { 
                report.module_started({'module':module});
                var result = _.reduce(value.test, function(acc, test_fn, scenario) {
                    var scen_d = when.defer();
                    var spec = {'module':module, 'scenario':scenario};
                    report.scenario_started(spec);
                    when(checks(module,scenario, report), test_fn)
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
                var mspec = {'module':module};
                when.all(_.values(result)).done(function() {                    
                    report.module_passed(mspec);
                    onload(value.result);                                    
                }, function(e) {  
                    mspec['error'] = e;
                    report.module_failed(mspec);
                    onload.error(mspec);
                });
            },
                function(err) {
                    report.error({'module': module, error:err});
                });
        }};
});
