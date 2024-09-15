import Widget from "./Widget";

document.addEventListener("DOMContentLoaded", () => {
  const widget = new Widget(document.querySelector(".form-inline"));
  widget.init();
});
