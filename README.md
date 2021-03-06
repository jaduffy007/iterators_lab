# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`: A higher-order function accepts other functions as arguments.  It can also return a function.

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max` returns the number with the highest value
* `min` returns the number with the lowest value
* `each` executes the provided function once on each of the array's elements. Returns undefined.
* `map`   creates a new array from calling the function provided, on each item in the array.
* `filter`: [note]  The items that return true from using the provided callback function are included in a new array. Creates a subset of the initial array.
* `reduce`: [note]a method that accumulates each value of the array into a single value.  Setting an inital value is optional.
* `reject`: [note] The opposite of filter. Returns a new array of the items that failed the 'true' test conditional.

Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

