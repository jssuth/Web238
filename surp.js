// John Sutherland Web 114 Final Project 11-08-22
"use strict";

//Requirements switch and if-else

//console.log("In JS");
//alert("In JS");
let newVal = "Unset";
let concatV = document.getElementById("concat");
let logicalV =document.getElementById("logical");
let opV =document.getElementById("op");



//console.log("1st spot");

concatV.onclick = function () 
{
  let n1 = (document.getElementById("num1").value);
  let n2 = (document.getElementById("num2").value);
  newVal = n1 + n2;
  demo1.innerHTML = "string + string = " + newVal + "    + as concatenate";
  newVal = n1 + n2  ;
  demo2.innerHTML = "string + number = " + newVal + "    + as concatenate";
  newVal = +n1 + +n2;
  demo3.innerHTML = "number + number = " + newVal + "    + as addition";
  
} 
 // console.log("2nd Spot");
 
 
 
 
 
 

logicalV.onclick = function () 
{
  let n3 = (document.getElementById("num3").value);
  let n4 = (document.getElementById("num4").value);
  let oper1 = (document.getElementById("op").value);  
  
    switch (oper1){           //Requirement switch
      case "&&" :
      
        if (n3 == "t") {      //Requirement if-else
           n3 = true;
         }
         else  {
         
           n3 = false;
         }
         
         if (n4 == "t") {
           n4 = true;
         }
        else   {
           n4 = false;
        }
      
      //console.log(n3, n4, oper1);
        newVal = n3 && n4;
        demo.innerHTML = "answer = " + newVal;
        break;
        
      case "||" :
      
         if (n3 == "t") {
           n3 = true;
         }
         else  {
         
           n3 = false;
         }
         
         if (n4 == "t") {
           n4 = true;
         }
        else   {
           n4 = false;
        }
        
         //console.log(n3 || n4, n3, n4,);
         
        newVal = (n3 || n4);
        
         //console.log(n3 || n4);
        demo.innerHTML = "answer = " + newVal;      
      }
    
  //console.log(oper1, n3, n4, newVal);

  demo.innerHTML= "answer = " + newVal;  
}


 

