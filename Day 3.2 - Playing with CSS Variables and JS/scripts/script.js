"use strict";

window.addEventListener("load", () => {

  const spacing = document.querySelector("[name='spacing']");
  const blur = document.querySelector("[name='blur']");
  const base = document.querySelector("[name='base']");


  // Not DRY:
  blur.addEventListener("input", () => {
    const blurValue = blur.value;
    document.documentElement.style.setProperty("--blur", `${blurValue}px`);
  });



  spacing.addEventListener("input", () => {
    const spacingValue = spacing.value;
    document.documentElement.style.setProperty("--spacing", `${spacingValue}px`);
  });



  base.addEventListener("input", () => {
    const baseValue = base.value;
    document.documentElement.style.setProperty("--base", `${baseValue}`);
  });
}); // End load event listener