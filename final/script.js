//intro page
let startPage = document.getElementById("startPage");
let startButton = document.getElementById("startButton");

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

let backButton = document.getElementById("backButton");

if (backButton) {
    backButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
}


//Scrolling
function windowWasScrolled() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);



    // use translate to move trees and forgrounds
    let mountains = document.getElementById("mountains");
    let trees = document.getElementById("trees");

    let scrollAmount = window.scrollX;

    mountains.style.transform = `translateX(${-scrollAmount * 0.2}px)`;
    trees.style.transform = `translateX(${-scrollAmount * 0.5}px)`;

    let fox = document.getElementById("walkFox");

    // move fox as you scroll (adjust multiplier)
    fox.style.left = `${50 + percentage * 7}px`;
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
