import { ps } from "./ps";

export function validateCard(cardNumber) {
  let number = cardNumber;
  while (number > 0) {
    for (const el in ps) {
      if (Number(el) === number) {
        return ps[el];
      }
    }
    number = Math.floor(number / 10);
  }

  return false;
}
