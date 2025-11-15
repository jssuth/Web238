// John Sutherland Web 114 Final Project 11-8-22
//This provides satisfaction of requirements 1. Arithmetic operators, 2. Equality, 3. Comparisons, 4. Mofify in Place,
//  5. Increment, 6. Decrement
"use strict";
//console.log("In JS");
//alert("In JS");
let newVal = "Unset";
let plusV = document.getElementById("plus");
let minusV =document.getElementById("minus");
let timesV = document.getElementById("times");
let divideV = document.getElementById("divide");
let remainderV = document.getElementById("remainder");
let expoV =document.getElementById("expo");
let modinV = document.getElementById("modin");
let incrV =document.getElementById("incr");
let decreV = document.getElementById("decre");

//console.log("2ND spot");

plusV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1 + n2;
  demo.innerHTML = "answer = " + newVal;
} 
  //console.log("3rd Spot");

minusV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1-n2;
  demo.innerHTML= "answer = " + newVal;
}

timesV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1*n2;
  demo.innerHTML= "answer = " + newVal;
}

divideV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1/n2;
  demo.innerHTML= "answer = " + newVal;
}

remainderV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1%n2;
  demo.innerHTML= "answer =" + newVal;
}

expoV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  newVal = n1**n2;
  demo.innerHTML= "answer = " + newVal;
}

modinV.onclick = function () 
{
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let i = n1;
  i +=  n2;                                                   //Modify in Place
  demo.innerHTML = "answer = " + i;
} 

incrV.onclick = function () 
{
  newVal = parseFloat(document.getElementById("num1").value);
  newVal++;                                                   //Increment
  demo.innerHTML = "answer = " + newVal;
} 

decreV.onclick = function () 
{
  newVal = parseFloat(document.getElementById("num1").value);
  newVal--;                                                   //Decrement
  demo.innerHTML = "answer = " + newVal;
} 