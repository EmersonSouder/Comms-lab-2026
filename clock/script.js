let prevMinute = new Date().getMinutes();
let playBtn = document.querySelector("#musicButton");
let music = new Audio("elevatorMusic.mp3");
let ding = new Audio("elevatorDing.mp3");

function getTheTime() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(h, m, s);

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".minutes").innerHTML = m;
    document.querySelector(".seconds").innerHTML = s;
}

getTheTime();
setInterval(getTheTime, 1000);

function playSound() {
    console.log("play now");
    elevatorMusic.play();
}
playBtn.addEventListener("click", playSound)
