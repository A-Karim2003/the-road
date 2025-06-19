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
