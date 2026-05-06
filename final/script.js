//intro page
let startPage = document.querySelector("#startPage");
let startButton = document.querySelector("#startButton");
let talkClicked = false;


if (startPage && startButton) {
    function makeLeaf() {
        let leaf = document.createElement("img");
        leaf.src = "images/leaf.png";
        leaf.classList.add("leaf");

        leaf.style.left = Math.random() * window.innerWidth + "px";
        leaf.style.animationDuration = Math.random() * 3 + 2 + "s";

        startPage.appendChild(leaf);

        setTimeout(function () {
            leaf.remove();
        }, 6000);
    }

    setInterval(makeLeaf, 300);

    startButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
}

//under rock

let backButton = document.querySelector("#backButton");

if (backButton) {
    backButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
}


//Scrolling
function windowWasScrolled() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);


    let mountains = document.querySelector("#mountains");
    let trees = document.querySelector("#trees");

    let scrollAmount = window.scrollX;

    mountains.style.transform = `translateX(${-scrollAmount * 0.2}px)`;
    trees.style.transform = `translateX(${-scrollAmount * 0.5}px)`;

    let fox = document.querySelector(".foxContainer");

    fox.style.left = `${50 + percentage * 7}px`;

    let talkButton = document.querySelector("#talkButton");

    if (!talkClicked) {
        if (percentage > 90) {
            talkButton.style.display = "block";
        } else {
            talkButton.style.display = "none";
        }
    }
}
window.addEventListener("scroll", windowWasScrolled)




function getScrollPercentage() {
    let scrolledAlready = window.scrollX;
    // console.log(scrolledAlready)

    let pageWidth = document.body.scrollWidth;
    // console.log("pageWidth", pageWidth)

    let windowWidth = window.innerWidth;

    let possibleScrollSpace = pageWidth - windowWidth;

    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    return percentage;
}

// conversation

let talkButton = document.querySelector("#talkButton");
let foxSpeech = document.querySelector("#foxSpeech");
let crowSpeech = document.querySelector("#crowSpeech");
let crowCheese = document.querySelector("#crowCheese");
let foxCheese = document.querySelector("#foxCheese");
let foxContainer = document.querySelector(".foxContainer");
let crow = document.querySelector("#branchCrow");

if (talkButton) {
    talkButton.addEventListener("click", function () {
        talkClicked = true;
        talkButton.style.display = "none";

        foxSpeech.style.display = "block";
        foxSpeech.textContent = "Good day, Miss Crow!";

        setTimeout(function () {
            foxSpeech.textContent = "How beautiful you look today! Your feathers are so shiny, and your eyes are so bright! If your voice is half as beautiful as you are, you must truly be the queen of all birds!";
        }, 1000);

        setTimeout(function () {
            foxSpeech.textContent = "Please sing for me!";
        }, 5000);

        setTimeout(function () {
            foxSpeech.style.display = "none";

            crowSpeech.style.display = "block";
            crowSpeech.textContent = "caw caw!";

            crowCheese.classList.add("cheeseFall");
        }, 8000);

        setTimeout(function () {
            crowSpeech.style.display = "none";

            foxSpeech.style.display = "block";
            foxSpeech.textContent = "I can't believe you fell for that. Thanks for dinner!";
        }, 11000);

        setTimeout(function () {
            foxSpeech.style.display = "none";

            crowCheese.style.display = "none";
            foxCheese.style.display = "block";

            foxContainer.classList.add("foxLeave");

            crow.style.pointerEvents = "auto";
            crow.style.cursor = "pointer";

            crow.addEventListener("click", function () {
                window.location.href = "index4.html";
            });
        }, 14000);
    });
}

// index4 crow page

let crowTalkButton = document.querySelector("#crowTalkButton");
let crowCloseSpeech = document.querySelector("#crowCloseSpeech");
let startFollowButton = document.querySelector("#startFollowButton");
let closeupLayer = document.querySelector("#closeupLayer");

let flyingCrowContainer = document.querySelector("#flyingCrowContainer");
let crowMouthCheese = document.querySelector("#crowMouthCheese");
let crowHappySpeech = document.querySelector("#crowHappySpeech");
let finalFollowButton = document.querySelector("#finalFollowButton");

let crowCanFly = false;
let crowReachedCheese = false;

if (document.querySelector("#index4Body")) {
    window.scrollTo(0, 0);
}

if (crowTalkButton) {
    crowTalkButton.addEventListener("click", function () {
        crowTalkButton.style.display = "none";

        crowCloseSpeech.style.display = "block";
        crowCloseSpeech.textContent = "I can't believe I was deceived by that fox.";

        setTimeout(function () {
            crowCloseSpeech.textContent = "Because of him, I lost my dinner.";
        }, 2500);

        setTimeout(function () {
            crowCloseSpeech.textContent = "I need to go find my next meal.";
        }, 5000);

        setTimeout(function () {
            crowCloseSpeech.style.display = "none";
            startFollowButton.style.display = "block";
        }, 7500);
    });
}

function getScrollPercentageVertical() {
    let scrolled = window.scrollY;

    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;

    let possibleScroll = pageHeight - windowHeight;

    let percentage = (scrolled / possibleScroll) * 100;
    return percentage;
}

if (startFollowButton) {
    startFollowButton.addEventListener("click", function () {
        startFollowButton.style.display = "none";

        window.scrollTo(0, 0);

        closeupLayer.classList.add("slideAway");

        setTimeout(function () {
            closeupLayer.style.display = "none";
            document.body.style.overflow = "auto";
            window.scrollTo(0, 0);
            crowCanFly = true;
        }, 1500);
    });
}

function crowWasScrolled() {
    if (!crowCanFly || crowReachedCheese) {
        return;
    }

    let percentage = getScrollPercentageVertical();

    flyingCrowContainer.style.top = `${80 + percentage * 7}px`;
    flyingCrowContainer.style.left = `${80 + percentage * 6}px`;

    let crowBox = flyingCrowContainer.getBoundingClientRect();
    let cheeseBox = document.querySelector("#cheesePile").getBoundingClientRect();

    let touching =
        crowBox.left < cheeseBox.right &&
        crowBox.right > cheeseBox.left &&
        crowBox.top < cheeseBox.bottom &&
        crowBox.bottom > cheeseBox.top;

    if (touching) {
        crowReachedCheese = true;

        crowHappySpeech.style.display = "block";
        crowHappySpeech.textContent = "Wow! This is more than I could ever imagine!";

        setTimeout(function () {
            crowHappySpeech.style.display = "none";

            crowMouthCheese.style.display = "block";

            flyingCrowContainer.classList.add("crowLeave");

            setTimeout(function () {
                finalFollowButton.style.display = "block";
            }, 3000);

        }, 5000);
    }
}

window.addEventListener("scroll", crowWasScrolled);

if (finalFollowButton) {
    finalFollowButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
}

