define(['lodash', 'when'], function(_, when) {
    return function(mod, scen, rep) {

        var module = mod, scenario=scen, report=rep;        

        var eqfn = function(a, b, desc) {
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

        var err = function(err) {
            report.error(err);
        };

        return {
            eq: function(a, b, desc) {                        
                return when.isPromiseLike(a) || when.isPromiseLike(b) || when.isPromiseLike(desc)
                    ? when.all([a,b, desc]).spread(eqfn)
                    : eqfn(a, b, desc);
            }
        };
    };
});
