var clock = document.getElementById("clock");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

setInterval(function() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    currentHour = currentHour < 10 ? '0' + currentHour : currentHour;
    currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;

    hoursElement.innerText = currentHour;
    minutesElement.innerText = currentMinutes;
    secondsElement.innerText = currentSeconds;

    clock.classList.toggle("flash-effect", currentSeconds % 2 === 0);
}, 1000);







// // Get the clock element
// const clock = document.getElementById('clock');

// // Function to toggle the hover effect every second
// function toggleHoverEffect() {
//     clock.classList.toggle('hover-effect');
// }

// // Apply the hover effect every second
// setInterval(toggleHoverEffect, 1000);
// console.log ()


