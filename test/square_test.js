define(['prereq!multiplication_test', 'square'], function(multiplication_test, square) {
    return {
        test: {
            'Square': function(eq) {return eq(square(3), 9);}
        },
        result: square
    }
});
