import solution = require('./solution');
import {assert} from "chai";

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(solution.Kata.squareDigits(9119), 811181);
    assert.strictEqual(solution.Kata.squareDigits(0), 0);
  });
});