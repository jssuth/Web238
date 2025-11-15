// John Sutherland Web 114 Final Project comp game 11-08-22
//Satisfies requirements for 1. Equality and 2. Comparisons
"use strict";                 //Requirment for use strict
//console.log("In JS");
//alert("In JS");
let newVal = "Unset";
let equV = document.getElementById("equal");
let eequV =document.getElementById("eequal");
let nequV = document.getElementById("nequal");
let nnequV = document.getElementById("nnequal");
let lessV = document.getElementById("less");
let lesseqV =document.getElementById("lesseq");
let greatV =document.getElementById("greater");
let greateqV = document.getElementById("greateq");


//console.log("2ND spot");

equV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 == n2;
  demo.innerHTML = "answer = " + newVal;
} 
  //console.log("3rd Spot");

eequV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1===n2;
  demo.innerHTML= "answer = " + newVal;
}

nequV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 != n2;
  demo.innerHTML= "answer = " + newVal;
}

nnequV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 !== n2;
  demo.innerHTML= "answer =" + newVal;
}

lessV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 < n2;
  demo.innerHTML= "answer = " + newVal;
}

lesseqV.onclick= function ()
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 <= n2;
  demo.innerHTML= "answer = " + newVal;
}

greatV.onclick = function ()
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 > n2;
  demo.innerHTML= "answer = " + newVal;
}

greateqV.onclick = function ()
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 >= n2;
  demo.innerHTML= "answer = " + newVal;
}


