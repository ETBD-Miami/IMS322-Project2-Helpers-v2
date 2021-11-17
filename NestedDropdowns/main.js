function myFunction(id) {
    let thisButton = document.getElementById(id)
    let displayText = thisButton.innerHTML
    let displayOutput = document.getElementById("display")
    displayOutput.innerHTML = "You clicked " + displayText + "."
}