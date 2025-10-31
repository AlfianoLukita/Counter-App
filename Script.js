    // function Counter
var Num = 1;
var Count = 0;
    
function plus() {
      Count += Num;
      document.getElementById("counter").innerText = Count;
      
    }
function minus() {
      Count -= Num
      document.getElementById("counter").innerText = Count;
    }
function reset() {
      Count = 0 ;
      Num = 1 ;
      document.getElementById("counter").innerText = Count;
      document.getElementById("Config").innerText = Num;
    }
function Add() {
      Num++;
      document.getElementById("Config").innerText = Num;
    }
function Add5() {
      Num += 5;
      document.getElementById("Config").innerText = Num;
    }
function Subtract() {
      Num--;
      document.getElementById("Config").innerText = Num;
    }
function Subtract5() {
      Num -= 5 ;
      document.getElementById("Config").innerText = Num;
    }
function DarkTheme(){
  
  document.body.style.backgroundColor = "#2a2a2a";
  document.body.style.color = "white";
  const Para = document.querySelectorAll("p");
  const Btn = document.querySelectorAll("button:not(#No)");
  
  Para.forEach(p => {
    p.style.color = "white";
  });
  Btn.forEach(button => {
    button.style.color = "#2a2a2a";
    button.style.backgroundColor = "white";
  });
};
function LightTheme(){
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#2a2a2a";
  
  const Para = document.querySelectorAll("p");
  const Btn = document.querySelectorAll("button:not(#No)");
  Para.forEach(p => {
    p.style.color = "#2a2a2a";
  });
  Btn.forEach(button => {
    button.style.color = "white";
    button.style.backgroundColor = "#2a2a2a";
  });
};
