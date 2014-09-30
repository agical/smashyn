define(['multiplication'], function(multiplication) {
    return {
        test: { 'Multiply': function(c) {
            return c.eq(multiplication(2, 3), 6, "Positive numbers") 
                && c.eq(multiplication(-2,3), -6, "One negative number");
        }},
        result: multiplication
    }
});
