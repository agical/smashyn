define(['multiplication'], function(multiplication) {
    console.log(__filename, "M-test:", multiplication);
    return {
        test: { 'Multiply': function(eq) {return eq(multiplication(2, 3), 6)} },
        result: multiplication
    }
});
