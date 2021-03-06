define(['square', 'smashyn', 'multiplication_test'], function( square, smashyn) {
    return smashyn(
        {
            module: 'Square',
            scenarios: {
                'Square': function(c) {
                    return c.eq(square(3), 9, "Square positive number");
                },
            },
            result: square
        }
    );
});

