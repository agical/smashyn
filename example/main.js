define(['lodash', 'when', 'square_test', 'promise_test'], function(_, when, square_test, promise_test) {
    when.settle(square_test, promise_test).done(console.log);
});
