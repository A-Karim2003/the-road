"use strict";

const cardContainer = document.querySelector(".cards-wrapper");
const logo = document.querySelector(".logo h1");
const logoText = logo.textContent;
logo.textContent = "";

[...logoText].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${i * 50}ms`;
  logo.append(span);
});

//? Even listener for toggling front/back cards

cardContainer.addEventListener("click", (e) => {
  const toggleCardBtn = e.target;
  const card = e.target.closest(".card");
  if (!toggleCardBtn.classList.contains("navigation-button")) return;

  card.classList.toggle("change");
});

// contact section

const inputGroups = document.querySelector(".input-groups");

inputGroups.addEventListener("click", (e) => {
  if (document.activeElement.tagName === "INPUT") {
    const input = document.activeElement;
    const label = input.closest(".input-group").querySelector("label");

    label.style.color = "red";
    label.style.transform = `scale(0.9) translateY(-5px)`;
    label.style.opacity = "0.6";

    // if inputs are not focused, remove styles
    input.addEventListener("blur", () => {
      label.style.color = "black";
      label.style.transform = `scale(1)`;
      label.style.opacity = "1";
    });
  }

  if (document.activeElement.tagName === "TEXTAREA") {
    const input = document.activeElement;
    const label = document.activeElement
      .closest(".input-group")
      .querySelector("label");

    label.style.color = "red";
    label.style.transform = `scale(0.9) translateY(-5px)`;
    label.style.opacity = "0.6";

    // if inputs are not focused, remove styles
    input.addEventListener("blur", () => {
      label.style.color = "black";
      label.style.transform = `scale(1)`;
      label.style.opacity = "1";
    });
  }
});
