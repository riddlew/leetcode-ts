import { boolToWord } from "./solution";
import { expect } from "chai";

describe("Boolean to string", () => {
  it('true returns "Yes"', () => {
    expect(boolToWord(true)).to.equal("Yes");
  });

  it('false returns "No"', () => {
    expect(boolToWord(false)).to.equal("No");
  });
});
