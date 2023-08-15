// document.querySelector("button").addEventListener("click", handleClick());

// function handleClick(){
//     alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

// function House(name,age){
//     this.name=name;
//     this.age=age;
// }
// var h1=new House("tm",9);
// console.log(h1.name);

//  var audio = new Audio("sound/crash.mp3");
//  audio.play();


// DETECTING BUTTON PRESS  
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum ")[i].addEventListener("click", function () {
    //alert("I got clicked");
    // this.style.color="red";

    var buttonInnerHTML = this.innerHTML;
   makesound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
    
  });
}

// document.addEventListener("keypress", function () {
//   alert("key was pressed");
// });




// DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
switch (key) {
  case "w":
    var audio = new Audio("sound/tom-1.mp3");
    audio.play();
    break;
  case "a":
    var audio = new Audio("sound/tom-2.mp3");
    audio.play();
    break;

  case "s":
    var audio = new Audio("sound/tom-3.mp3");
    audio.play();
    break;

  case "d":
    var audio = new Audio("sound/tom-4.mp3");
    audio.play();
    break;
  case "j":
    var audio = new Audio("sound/snare.mp3");
    audio.play();
    break;
  case "k":
    var audio = new Audio("sound/crash.mp3");
    audio.play();
    break;
  case "l":
    var audio = new Audio("sound/kick-bass.mp3");
    audio.play();
    break;
  default:
    console.log(buttonInnerHTML);
    break;
}
}

function buttonAnimation(currentKey){
 var activeButton= document.querySelector("." + currentKey)
 activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100);
}

