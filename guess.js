// John Sutherland Web 114 Final Project 11-08-22
//Requirements for prompt, alert, while
"use strict";
let gNum = Math.floor(Math.random() *10) +1;
   console.log(gNum);
let xNum =0;
let cnt = 0;
let hint = '';

do {
 let input = prompt("please enter a number between 1 & 10" + hint); //requirement prompt
 xNum = parseInt(input);
 cnt++;
 if (xNum > gNum) {
  hint =  ", and less than " + xNum;
 }else if (xNum < gNum) { 
   hint = ', and greater then ' + xNum;
 }else if (xNum == gNum) {
 alert (gNum + " is the secret number");      //requirement alert
  //alert(cnt + " - Guesses were need to get correct number!");
 } 
 
} while (xNum != gNum);                     //requirement while

snum.innerHTML = "The secret number was " + gNum;
numguess.innerHTML= "The number of guesses was " + cnt; 