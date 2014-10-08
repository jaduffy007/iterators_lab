

var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {
    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
 
  // min
  describe("min", function() {
    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    beforeEach(function () {
      myArr = [14, 22, 67, 34];
    });
  it("should return the lowest value number", function(){
    // Call what you want to test
    var result = Iterators.min(myArr);
    // Compare result with what you expect.
    expect(result).to.equal(14);
    });
  });

  // map test
  describe("map", function(){
    var myArr;
    beforeEach(function () {
      myArr = [2, 4, 8, 10];
    });

    var timesTwo = function(x){
        return x*2;
    };

    it("should create a new array of values*2", function(){
      // Test starts here, call map function
      var result = Iterators.map(myArr, timesTwo);

      // now compare result with expected
      expect(result).to.deep.equal([4, 8, 16, 20]);
    });
  });

  describe("each", function(){
    var myArr;
    beforeEach(function () {
      myArr = [2, 4, 8, 10];
    });

    it("should create a new array of values*2", function(){
      // Test starts here, call map function
      var resultArray = [];

      Iterators.each(myArr, function(x){
        resultArray.push(x*2);
      });

      // now compare result with expected
      expect(resultArray).to.deep.equal([4, 8, 16, 20]);
    });
  });

});

// Filter test

describe("filter", function() {
  var myArr;
    beforeEach(function () {
      myArr = [2, 4, 8, 10, 13, 17];
    });
    resultArray = [];

    Iterators.filter(myArr, function(x){
      resultArray.push(x % 2 === 0);

  it("should create a new array with only even numbers", function(){
    expect(resultArray).to.equal([2, 4, 8, 10]);
    
  });
});
});





