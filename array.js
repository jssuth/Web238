// John Sutherland Web 114 11-08-22 Final Project- Array 
//Satisfies requirment for array, console.log, for  and if-else, documentgetElementByID() textContent, tagName 
//      className and classList
"use strict";
console.log("In JS");    //Requirement for console.log
//alert("In Array");

//let ingred = document.getElementById("ingredientlist").textContent;
//document.getElementById("demolist").innerHTML = ingred;

let parray = ['anchovies', 'cheese', 'dough', 'pepperoni'];
let plusV = document.getElementById("1");
let minusV =document.getElementById("2");
let timesV = document.getElementById("3");
let divideV = document.getElementById("4");

//console.log(parray);
//console.log("2ND spot");

plusV.onclick = function () 
{
  
  let newVal = parray[0];                    // Array requirement
  demo.innerHTML = "1st indgredent is " + newVal +"  You got to be kidding!!";
} 
 // console.log("3rd Spot");

minusV.onclick = function () 
{
  
  let newVal = parray[1];
  demo.innerHTML= "2nd indgredent is " + newVal + " Now you're talking.";
}

timesV.onclick = function () 
{
  
  let newVal = parray[2]
  demo.innerHTML= "3rd indgrent is " + newVal + " re me fa sol lat ti do ";
}

divideV.onclick = function () 
{
  
  let newVal = parray[3];
  demo.innerHTML= "4th but who could live without " + newVal +" King of the Pizza array!";
}

function showArray(){
  for (let a in parray) {                             //requirement for and else-if
      if (a ==0) {
        demo0.innerHTML= parray[a];
      } else if (a==1) {
          demo1.innerHTML = parray[a];      
      } else if (a==2) {
          demo2.innerHTML = parray[a];
      } else           {
          demo3.innerHTML = parray[a];
      }
  }
}
let text=document.getElementById("ingredientlist").textContent;  //requirement getElementById()textContent
document.getElementById("demolist").innerHTML = text;

let pnumber = document.getElementsByTagName("p");               //requirement getElementbyTagname
let lnumber = pnumber.length;
taglist.innerHTML = "Number of p's in document is " + lnumber;

let cnam = document.getElementById(1).classList;               //requirement getElementBy() classList
radiob.innerHTML = "class is " + cnam;


