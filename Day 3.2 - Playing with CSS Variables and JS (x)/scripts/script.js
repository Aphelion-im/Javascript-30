"use strict";

window.addEventListener("load", () => {

  // Basic version of the assignment. It does not alter the CSS variables.

  const spacing = document.querySelector("[name='spacing']");
  const blur = document.querySelector("[name='blur']");
  const base = document.querySelector("[name='base']");
  const image = document.querySelector("main img");
  const h1adjust = document.querySelector(".adjustJs");

  blur.addEventListener("input", () => {
    const blurValue = blur.value;
    image.style.setProperty("filter", `blur(${blurValue}px)`);
  });

  spacing.addEventListener("input", () => {
    const spacingValue = spacing.value;
    image.style.setProperty("padding", `${spacingValue}px`);
  });

  base.addEventListener("input", () => {
    const baseValue = base.value;
    image.style.setProperty("background-color", `${baseValue}`);
    h1adjust.style.setProperty("color", `${baseValue}`);
  });
}); // End load event listener