"use strict";

const logo = document.querySelector(".logo h1");
const logoText = logo.textContent;
logo.textContent = "";

[...logoText].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${i * 50}ms`;
  logo.append(span);
});
