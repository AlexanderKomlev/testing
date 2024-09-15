import { validateCard } from "../validateCard";

test.each([
  [371449635398431, "amex"],
  [30569309025904, "diners_club"],
  [6011111111111117, "discover"],
  [3530111333300000, "jcb"],
  [5555555555554444, "master"],
  [4111111111111111, "visa"],
])("validateCard: result for %s is %s", (number, result) => {
  expect(validateCard(number)).toBe(result);
});
