import { assert } from "chai";
import { Vector } from "./solution";

describe("Tests", () => {
  it("Simple Equality Test", () => {
    let a = new Vector([1,2]);
    let b = new Vector([3,4]);
    assert.isFalse(a.equals(b));
  });
  
  it("Simple Add Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.isTrue(a.add(b).equals(new Vector([4,6, 8])));
  })
  
  it("Simple Norm Test", function () {
    assert.approximately(new Vector([1,2,3]).norm(), Math.sqrt(14),  0.1);
  });
  
  it("Simple Subtract Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.isTrue(a.subtract(b).equals(new Vector([-2,-2,-2])));
  });
  
  it("Simple Dot Test", function() {
    let a = new Vector([1, 2, 3]);
    let b = new Vector([3, 4, 5]);
    assert.strictEqual(a.dot(b), 26);
  })
  
  it("Simple ToString Test", function() {
    let a = new Vector([1, 2, 3]);
    assert.strictEqual(a.toString(), "(1,2,3)");
  })
});
