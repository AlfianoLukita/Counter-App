
var Num = 1;
var Count = 0;
    
function plus() {
  Count += Num;
  document.getElementById("counter").innerText = Count;
      
}
function minus() {
  Count -= Num;
  document.getElementById("counter").innerText = Count;
}
function reset() {
  Count = 0;
  Num = 1;
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
function Add10() {
  Num += 10;
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
function Subtract10() {
  Num -= 10 ;
  document.getElementById("Config").innerText = Num;
}

