define(['when', 'smashyn'], function(when, smashyn) {
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return smashyn({
        module: 'Promise test',
        scenarios: {
            'Random timeout': function(c) {
                var d1 = when.defer();
                var d2 = when.defer();
                setTimeout(function() {d1.resolve(7);}, getRandomInt(1,100));
                setTimeout(function() {d2.resolve(6);}, getRandomInt(1,100));
                return c.eq(d1.promise, d2.promise, "Comparing promises results");
            }
        },
        result: true
    });
});
