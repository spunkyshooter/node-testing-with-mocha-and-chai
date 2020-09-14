const chai = require("chai");

//TIPS:
// DOn't use big fat arrow functions. (anonymous functions)
//For TDD style. (Test driven development)
// - Can't be chained.
// - Hard to communicate with the stake holders.
const assert = chai.assert;

//For BDD style. ( behaviour driven development)
// Can be chained and easier to communicate with product owner (stake holders)
// Hence iterates faster;
const should = chai.should(); //call the function
const expect = chai.expect;

/*Suppose we are checking array functionality */

const arrFromAnotherSource = [1, 2, 3];
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.isArray(arrFromAnotherSource, "is not an array");
      assert.include(arrFromAnotherSource, 3, "Array contains value");
    });
    it("should return -1 when the value is not present- should version", function () {
      arrFromAnotherSource.should.be
        .an("Array")
        .include(3, "Array contains value");
    });
    it("should return -1 when the value is not present- expect version", function () {
      expect(arrFromAnotherSource)
        .be.an("Array")
        .and.include(3, "Array contains value");
    });
  });
});

/*
Suppose we are testing some functionality (say Object)
//It real case it would be a db (say)
*/

const ObjectFromAnotherSource = {
  name: "manoj",
  loves: "chai", //coffee
};
describe("Object", function () {
  describe("#Funtions", function () {
    it("#keys - assert style", function () {
      assert.isObject(ObjectFromAnotherSource, "Should be an object");
      assert.deepEqual(
        Object.keys(ObjectFromAnotherSource),
        ["name", "loves"],
        "Should be an object"
      );
    });
    it("#Keys - should style", function () {
      //should style
      ObjectFromAnotherSource.should.be
        .an("Object")
        .and.to.satisfy(function (obj) {
          return Object.keys(obj).should.be.deep.equal(
            ["name", "loves"],
            "Keys are not equal"
          );
        });
    });
    it("#Keys - expect style", function () {
      //expect style
      expect(ObjectFromAnotherSource)
        .be.an("Object")
        .and.to.satisfy(function (obj) {
          return Object.keys(obj)
            .should.be.an("Array")
            .and.to.deep.equal(["name", "loves"], "Keys are not equal");
        });
    });
  });

  describe("#properties", function () {
    it("should have property name - assert style", function () {
      assert.isObject(ObjectFromAnotherSource, "Anticipating an object");
      assert.property(
        ObjectFromAnotherSource,
        "loves",
        "who doesn't love chai?"
      );
      assert.deepEqual(
        ObjectFromAnotherSource.loves,
        "chai",
        "who doesn't love chai?"
      );
    });
    it("should have property name - should style", function () {
      ObjectFromAnotherSource.should.be
        .an("Object", "Anticipating an object")
        .and.have.property("loves","chai", "who doesn't love chai?");
    });
    it("should have property name - expect style", function () {
      expect(ObjectFromAnotherSource)
        .to.be.an("Object", "Anticipating an object")
        .and.have.property("loves","chai", "who doesn't love chai?");
    });
  });
});
