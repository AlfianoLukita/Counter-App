const Click = new Audio('media/clicksoundeffect.mp3');
const Btn = document.querySelectorAll('button');
const Sfx = document.getElementById('SFX');
Btn.forEach(button => {
  button.addEventListener("click", () => { 
    if(Sfx.checked){
      Click.currentTime = 0; 
      Click.play();
    }else {
      Click.pause()
      Click.currentTime = 0;
    }
  });
});

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
