define(['multiplication', 'smashyn'], function(multiplication, smashyn) {
    return smashyn(
        {
            module: 'Multiplication',
            scenarios: { 
                'Positive numbers': function(c) {
                    return c.eq(multiplication(2, 3), 6, "Single digit") ;
                },
                'One negative number': function(c) {
                    return c.eq(multiplication(-2,3), -6, "Single digit");
                }
            },
            result: multiplication
        }
    );
});
