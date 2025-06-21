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

// nav section

const menu = document.querySelector(".menu-container");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links li");
const hamburgerMenu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    hamburgerMenu.classList.remove("fa-bars");
    hamburgerMenu.classList.add("fa-x");
  } else {
    hamburgerMenu.classList.remove("fa-x");
    hamburgerMenu.classList.add("fa-bars");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
