import { validateCard } from "./validateCard";

export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  init() {
    document
      .querySelector(".form-control")
      .addEventListener("input", (event) => {
        event.preventDefault();
        this.check();
      });
  }

  check() {
    const cardNumber = Number(document.getElementById("card_number").value);
    const result = validateCard(cardNumber);
    if (result) {
      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.add("cdisabled"));
      document.querySelector(".card." + result).classList.add("check");
      document.querySelector(".card." + result).classList.remove("cdisabled");
    } else {
      document
        .querySelectorAll(".card")
        .forEach((el) => el.classList.add("cdisabled"));
    }
  }
}
