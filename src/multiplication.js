define([], function() {
    console.log(__filename, "Creating multiplication");
    return function(factor1, factor2) { return factor1 * factor2; }
});
