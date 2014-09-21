define(['tester!square', 'tester!multiplication'], function(square, multiplication) {
    console.log(__filename, "Final Square:", square);
    console.log(__filename, "Final multi:", multiplication);
    return square;
});
