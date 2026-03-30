let box1 = document.querySelector("#chaosButton")

function clickBox() {
    box1.classList.toggle("changeButton")

    if (!document.querySelector(".newButton")) { 
        let newButton = document.createElement("button")
        newButton.innerText = "NOW ME!"
        newButton.className = "newButton"
     
        newButton.addEventListener("click", function() {
            document.body.style.backgroundColor = "black"
            document.querySelector(".sub-head h3").innerText = "whats going to happen next?"
            document.querySelector(".head-title h1").style.color = "red"
            document.querySelector(".sub-head h3").style.color = "red"

            let nextButton = document.createElement("button")
            nextButton.innerText = "me next"
            nextButton.className = "nextButton"

            // 👇 THIS IS THE NEW PART
            nextButton.addEventListener("click", function() {

                // select everything we want to move
                let allItems = document.querySelectorAll("button, .head-title, .sub-head")

                allItems.forEach(function(item) {
                    item.style.position = "absolute"

                    item.style.left = Math.random() * (window.innerWidth - 100) + "px"
                    item.style.top = Math.random() * (window.innerHeight - 50) + "px"
                })
            })

            document.querySelector(".buttonContainer").append(nextButton)
        })

        document.querySelector(".buttonContainer").append(newButton)
    }
}