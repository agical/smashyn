define(['tester!multiplication_test', 'square'], function(multiplication_test, square) {
    console.log(__filename, "M-test result:", multiplication_test);
    console.log(__filename, "Square in test:", square);
    return {
        test: {
            'Square': function(eq) {return eq(square(3), 9);};
        },
        result: square
    }
});
