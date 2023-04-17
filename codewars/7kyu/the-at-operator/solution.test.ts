import {evaluate} from './solution';
import {assert} from "chai";
import {describe, it} from "mocha";

describe("Fixed tests:", function() {
  it("tests:", function() {
    const tests: [string, number | null][] = [
            ['1 @ 1', 4],
            ['3 @ 2', 13],
            ['6 @ 9', 66],
            ['4 @ -4', -9],
            ['1 @ 1 @ -4', -9],
            ['2 @ 2 @ 2', 40],
            ['0 @ 1 @ 2', 0],
            ['5 @ 0', null]
        ];
    tests.forEach((el: [string, number | null]) => {
      assert.equal<number|null>(evaluate(el[0]), el[1]);
    });
  });
});
