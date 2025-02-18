const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")
let showing = false

const onClick = function() {
    if (showing == false) {
        disclaimer.innerHTML = "None of the food on our menu is vegan, Sorry. All of our food is vegetarian, though."
        showing = true
    } else {
        disclaimer.innerHTML = ""
        showing = false
    }
}

button.addEventListener("click", onClick)