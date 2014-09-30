define(['multiplication'], function(multiplication) {
    return {
        test: { 'Multiply': function(eq) {
            return eq(multiplication(2, 3), 6, "Positive numbers") 
                && eq(multiplication(-2,3), -6, "One negative number");
        }},
        result: multiplication
    }
});
