// add a event listener to the window
// the event we want to listen to is called "scroll"



function windowWasScrolled() {
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);

    if (percentage > 33) {
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    } else {
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    if (percentage > 75) {
        console.log("paragraph appeared");
        document.querySelector(".two p").style.transform = "scale(5)";
    } else {
        document.querySelector(".two p").style.transform = "scale(1)";
    }






}
window.addEventListener("scroll", windowWasScrolled)





function getScrollPercentage() {
    let scrolledAlready = window.scrollY;

    let pageHeight = document.body.scrollHeight;

    let windowHeight = window.innerHeight;

    let possibleScrollSpace = pageHeight - windowHeight;

    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    return percentage;
}


