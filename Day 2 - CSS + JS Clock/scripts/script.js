"use strict";

window.addEventListener("load", () => {

  const hoursHand = document.querySelector(".hoursHand");
  const minutesHand = document.querySelector(".minutesHand");
  const secondsHand = document.querySelector(".secondsHand");


  setInterval(() => {
    let clock = new Date();
    let hours = (((clock.getHours()) * 30) + (clock.getMinutes() / 2));
    let minutes = (clock.getMinutes()) * 6; // 60 minutes * 6 = 360 degrees.
    let seconds = ((clock.getSeconds() / 60) * 360); // 60 seconds * 6 = 360 degrees.

    hoursHand.style.transform = `rotate(${hours}deg)`;
    minutesHand.style.transform = `rotate(${minutes}deg)`;
    secondsHand.style.transform = `rotate(${seconds}deg)`;

  }, 1000);

















}); // End load event listener