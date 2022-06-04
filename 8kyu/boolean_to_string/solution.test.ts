import { boolToWord } from "./solution";

test('true returns "Yes"', () => {
  expect(boolToWord(true)).toEqual("Yes");
});

test('false returns "No"', () => {
  expect(boolToWord(false)).toEqual("No");
});