define(['when'], function(when) {
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
        test: {
            'Random timeout': function(c) {
                var def = when.defer();
                setTimeout(def.resolve, getRandomInt(1,500));
                return def.deferred;
            }
        },
        result: true
    }
});
