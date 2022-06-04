import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return a proper value", function() {
    assert.equal(solution.reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.equal(solution.reverseWords('apple'), 'elppa');
    assert.equal(solution.reverseWords('a b c d'), 'a b c d');
    assert.equal(solution.reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});