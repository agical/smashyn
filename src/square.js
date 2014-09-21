define(['multiplication'], function(multiplication) {
    console.log(__filename, "Multiplication in square:", multiplication);
    return function(root) {return multiplication(root, root);};
});
