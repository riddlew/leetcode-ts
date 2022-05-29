import { boolToWord } from "./boolean_to_string";

test('true returns "Yes"', () => {
  expect(boolToWord(true)).toEqual("Yes");
});

test('false returns "No"', () => {
  expect(boolToWord(false)).toEqual("No");
});