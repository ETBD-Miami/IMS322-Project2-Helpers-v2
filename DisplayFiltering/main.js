let fishShow = true
let fruitShow = true
let birdsShow = true

// this is mostyle just the same function 3 different times, one for each category
// not the most efficient way to code this, but perhaps the easiest to read through

function showFish() {
    let fishDivs = Array.from(document.getElementsByClassName("fish"))
    let fishButton = document.getElementById("fish-button")

    // check to see if show variable is true
    if (fishShow) {
        // if it is, flip to false, hide the elements, and dim the button
        fishShow = false
        fishButton.style.opacity = "0.4"
        for (fish in fishDivs) {
            fishDivs[fish].style.display = "none"
        }
    }
    else {
        // do the opposite if the show variable is false
        fishShow = true
        fishButton.style.opacity = "1.0"
        for (fish in fishDivs) {
            fishDivs[fish].style.display = "flex"
        } 
    }
}

function showFruit() {
    let fruitDivs = Array.from(document.getElementsByClassName("fruit"))
    let fruitButton = document.getElementById("fruit-button")

    // check to see if show variable is true
    if (fruitShow) {
        // if it is, flip to false, hide the elements, and dim the button
        fruitShow = false
        fruitButton.style.opacity = "0.4"
        for (fruit in fruitDivs) {
            fruitDivs[fruit].style.display = "none"
        }
    }
    else {
        // do the opposite if the show variable is false
        fruitShow = true
        fruitButton.style.opacity = "1.0"
        for (fruit in fruitDivs) {
            fruitDivs[fruit].style.display = "flex"
        } 
    }
}

function showBirds() {
    let birdsDivs = Array.from(document.getElementsByClassName("birds"))
    let birdsButton = document.getElementById("birds-button")

    // check to see if show variable is true
    if (birdsShow) {
        // if it is, flip to false, hide the elements, and dim the button
        birdsShow = false
        birdsButton.style.opacity = "0.4"
        for (birds in birdsDivs) {
            birdsDivs[birds].style.display = "none"
        }
    }
    else {
        // do the opposite if the show variable is false
        birdsShow = true
        birdsButton.style.opacity = "1.0"
        for (birds in birdsDivs) {
            birdsDivs[birds].style.display = "flex"
        } 
    }
}