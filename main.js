define(['prereq!square_test', 'prereq!multiplication_test'], function(square, multiplication) {
    console.log(__filename, "Final Square:", square);
    console.log(__filename, "Final multi:", multiplication);
    return square;
});
