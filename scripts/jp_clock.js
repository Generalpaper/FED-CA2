"use strict";

/*
Bootstrap 5.2.3, HTML 5 and Javascript
CA2 Submission
Jethro's Plan

Countdown Code
Author: Juan Jethro
Date:   08/07/2023

Filename: jp_clock.js
*/

/* Yes, this code snippet was taken from cengage. However, I deem it allowed because it was a lesson plus I made my own edits */
/* Execute the function to run and display the countdown clock */
setInterval("runClock()", 500);
/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   var currentDay = new Date();

   /* Calculate the days until the next Earth Day */
   var earthDay = new Date("April 22, 2023");
   // if condition checks if current date has passed this years earth day, if so then + 1 to the year
   if (currentDay > earthDay.setFullYear(currentDay.getFullYear())) earthDay.setFullYear(currentDay.getFullYear() + 1);
   else earthDay.setFullYear(currentDay.getFullYear());
   

   // The hours, minutes and seconds left in the current day
   var countdownArray = new Array(4);
   countdownArray[0] = (earthDay - currentDay) / (1000 * 60 * 60 *24); 
   countdownArray[1] = (countdownArray[0] - Math.floor(countdownArray[0])) * 24;
   countdownArray[2] = (countdownArray[1] - Math.floor(countdownArray[1])) * 60;
   countdownArray[3] = (countdownArray[2] - Math.floor(countdownArray[2])) * 60;

   /* Display the time left until Earth Day */
   document.getElementById("days").textContent = Math.floor(countdownArray[0]);
   document.getElementById("hrs").textContent = Math.floor(countdownArray[1]);
   document.getElementById('mins').textContent = Math.floor(countdownArray[2]);
   document.getElementById('secs').textContent = Math.floor(countdownArray[3]);
}