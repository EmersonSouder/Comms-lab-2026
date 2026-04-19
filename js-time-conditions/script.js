let inputBox = document.querySelector('#inputBox') // = select the input element

let output = document.querySelector('#output')// = select the output div

let myButton = document.querySelector('#myButton') // = select the button

let clickCounter = 0;

// challenge 1: 
// when the button is clicked
myButton.addEventListener("click", changeOutputText)
function changeOutputText() {
    console.log("hello");
    // change the styling of the output text
    output.style.color = "pink";
    output.style.backgroundColor = "yellow";

    clickCounter = clickCounter + 1;
    console.log("clickCounter", clickCounter)
    if (clickCounter >= 10) {
        console.log("alarm!");
        supersize(myButton);
    }
}






// challenge 2: 
// as we type into the input box,
inputBox.addEventListener("input", inputChanged);
function inputChanged(eventInfo) {
    let text = inputBox.value;

    if (text == 'spin') {
        console.log("the value is spin, lets spin");
        spin(inputBox)
    }else if (text=='move'){
    console.log("move");
    inputBox.style.transform = "translate(80px,200px)";
    }
    output.innerText = text;
}



// // the text should appear inside the "ouput" p tag:
// inputBox.addEventListener("input", changeOutputText);
// function changeOutputText(eventInfo) {
//     console.log(eventInfo);
//     let text = inputBox.value;
//     output.innerText = text;
// }







// function to spin an element 
function spin(element) {
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");



function appendCountdown() {
    addMessage("press the button " + clickCounter + " times");
}

setInterval(appendCountdown, 1000)





// function to add text to the div with id "messageboard"
function addMessage(messagetext) {
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element) {
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

