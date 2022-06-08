import { dblLinear } from './solution';
import { assert } from "chai";

describe("Fixed Tests", function() {
  it("Basic tests maxRot", function() {
    assert.strictEqual(dblLinear(10), 22);
    assert.strictEqual(dblLinear(20), 57);
    assert.strictEqual(dblLinear(30), 91);
  });
});