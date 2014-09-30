define(['lodash', 'report', 'when'], function(_, report, when) {
    var eq = function(module, scenario) {
        return function(a, b, desc) {                        
            var ret = {'module':module, 'scenario':scenario, 'check':desc, type:'equals', 'a':a, 'b':b};
            if(a===b) {
                report.check_passed(ret);
                return true;
            } else {
                ret['error'] = 'Not equal';
                report.check_failed(ret);
                throw ret; 
            };
        };
    };

    return {
        load: function (module, req, onload, config) {
            req([module], function (value) { 
                report.module_started({'module':module});
                var result = _.reduce(value.test, function(acc, test_fn, scenario) {
                    var scen_d = when.defer();
                    var spec = {'module':module, 'scenario':scenario};
                    when(test_fn(eq(module,scenario)))
                        .done(function() {
                            report.scenario_passed(spec);
                            scen_d.resolve(spec);
                        }, function(e) {
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
                }, function(vals, e) {  
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
