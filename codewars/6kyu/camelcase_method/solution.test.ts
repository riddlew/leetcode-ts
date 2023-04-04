import solution = require('./solution');
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return a CamelCased string", function() {
    assert.equal(solution.camelCase(""), "");
    assert.equal(solution.camelCase("test case"), "TestCase");
    assert.equal(solution.camelCase("camel case method"), "CamelCaseMethod");
    assert.equal(solution.camelCase("say hello "), "SayHello");
    assert.equal(solution.camelCase(" camel case word"), "CamelCaseWord");
  });
});