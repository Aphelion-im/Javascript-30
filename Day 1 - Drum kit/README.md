# Day 1 - JavaScript Drum Kit

Updated: 16-2-2021


## Highlights of this project
* document.querySelector(`audio[data-key="${e.key}"]`);
* document.querySelector(`[data-key="${e.key}"]`);
* Audio.play();
* Audio.currentTime = 0; --> To allow multiple sounds, instead of playing only 1 sound every x seconds.
* .addEventListener("transitionend", function); --> After the CSS transition/effect on the element end, remove the FX class.
* Refactor! Refactor! Refactor! Make it smarter, shorter, non-DRY, and more efficient!