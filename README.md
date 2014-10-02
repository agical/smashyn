Smashyn
=======

Pre-alpha. Things will changes. That said, please try it out and give feedback.

Smashyn uses Asynchronous Module Definition (AMD) as an async testrunner for possibly dependent tests.

AMD provides a nifty way of organizing javascipt code and its dependencies. It is basically a dependecy 
tree resolver and loader.
By using an AMD plugin that first runs reprequisites (tests) for a module, and then if all prerequisites pass, 
passes on the resulting something down the (testing) chain, a suite of dependent tests can be created.

If you don't already use AMD for your javascript code, you probably should, regardless if you intend to use Smashyn or not. 


Howto?
-------

Check out the example for a possible setup for running tests.


The tests/prerequisites
-------

The tests can be synchronous or they can be asyncronous, returning a promise. 

A synchronous tests that throws an exception is a failed test, otherwise it is successful.

An asynchronous test fails if the promise returned is rejected, and otherwise it is successful. 

Smashyn should try to run as many tests in parallel as possible, with the only synchronization points being 
that dependencies tests will be resolved before continuing.


Smashyn?
-------

A mash-up of "smashing", what your tests are doing to your code,and "async", the nature of things.
