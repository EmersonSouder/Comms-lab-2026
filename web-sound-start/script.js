let soundSpeed =1;
let playBtn = document.querySelector("#playButton");
let pauseBtn = document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound");
let fastBtn = document.querySelector("#fastButton");
let slowBtn = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");

fastBtn.addEventListener("click", function (){
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
})

slowBtn.addEventListener("click", function (){
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
})

function playSound() {
    console.log("play now");
    catSound.play();
}

playBtn.addEventListener("click", playSound)

