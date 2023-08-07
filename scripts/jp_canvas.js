"use strict";
/*
Bootstrap 5.2.3, HTML 5 and Javascript
CA2 Submission
Jethro's Plan

Canvas Code
Author: Juan Jethro
Date:   08/07/2023

Filename: jp_canvas.js
*/

/* For the canvas */
const container = document.querySelector('#canvasContainer');
const change = document.querySelector('#resetButton');
var canvas = document.createElement('div');
var clicked = 1;
container.appendChild(canvas);

function randomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}


function createCanvas(noOfSquares) {
    let lengthOfEach = (300 / noOfSquares);
    canvas = document.createElement('div');
    for (let i=1;i<=noOfSquares;i++) {
        let row = document.createElement("div");
        row.classList.add("d-flex")
        row.style.height = `${lengthOfEach}px`;
        for (let j=1;j<=noOfSquares;j++) {
            let square = document.createElement("div");
            square.classList.add("border");
            square.classList.add("border-dark");
            square.style.height = `${lengthOfEach}px`;
            square.style.width = `${lengthOfEach}px`;
            square.addEventListener('mouseenter', () => {
                // If the number of clicks is even, then the brush works. This is to get the mouse click to write effect.
                if (clicked % 2 == 0 && !square.style.backgroundColor ) {
                    let rgb1 = randomNumber(255);
                    let rgb1pc10 = rgb1 / 10;
                    let rgb2 = randomNumber(255);
                    let rgb2pc10 = rgb2 / 10;
                    let rgb3 = randomNumber(255);
                    let rgb3pc10 = rgb3 / 10;
                    // I am storing the information of the divs in a data-*
                    square.dataset.rgb1 = rgb1;
                    square.dataset.rgb1pc10 = rgb1pc10;
                    square.dataset.rgb2 = rgb2;
                    square.dataset.rgb2pc10 = rgb2pc10;
                    square.dataset.rgb3 = rgb3;
                    square.dataset.rgb3pc10 = rgb3pc10;
                    square.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
                } else if (clicked % 2 == 0 && square.style.backgroundColor && square.dataset.rgb1 > 0) {
                    square.dataset.rgb1 = square.dataset.rgb1 - square.dataset.rgb1pc10;
                    square.dataset.rgb2 = square.dataset.rgb2 - square.dataset.rgb2pc10;
                    square.dataset.rgb3 = square.dataset.rgb3 - square.dataset.rgb3pc10;
                    square.style.backgroundColor = `rgb(${square.dataset.rgb1}, ${square.dataset.rgb2}, ${square.dataset.rgb3})`;
                }
            });
            square.addEventListener("click", () => {
                ++clicked;
            })
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
    container.appendChild(canvas);
}
change.addEventListener('click', squarechange);
var noOfSquares = 16;

function squarechange() {
    // Some validation
    var valid;
    do {
        valid = true;
        noOfSquares = Math.floor(+prompt("How many number of squares per side for the new grid?)" , 16));
        if (noOfSquares === 0 || isNaN(noOfSquares)) {
            return 0;
        }
        if (noOfSquares < 0) {
            alert("Whole number please!")
            valid =false;
        }
        else if (noOfSquares > 30) {
            alert("30 and below please!");
            valid = false;
        }
    } while (valid == false)
    
    container.removeChild(canvas);
    createCanvas(noOfSquares);
}
/* For the canvas */




