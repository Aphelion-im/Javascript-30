"use strict";

window.addEventListener("load", () => {


  document.addEventListener("keydown", playSound);

  function playSound(e) {

    const audioKey = document.querySelector(`audio[data-key="${e.key}"]`);
    const dataKey = document.querySelector(`[data-key="${e.key}"]`);

    if (dataKey) {
      audioKey.currentTime = 0;
      audioKey.play();
      dataKey.classList.add("playing");
      dataKey.addEventListener("transitionend", () => dataKey.classList.remove("playing"));
    } 
  };
}); // End load event listener