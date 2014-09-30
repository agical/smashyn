define(['prereq!multiplication_test', 'square'], function(multiplication_test, square) {
    return {
        test: {
            'Square': function(c) {return c.eq(square(3), 9, "Square positive number");}
        },
        result: square
    }
});
