let currentTime,
    timeReadout = document.getElementById("time-readout")

// call the getTime function right away to immediately display the time
getTime()

// use setInterval to call getTime every second (1000ms) to update time readout
setInterval(getTime, 1000)

function getTime() {
    currentTime = moment().format("h:mm:ss a")
    timeReadout.innerHTML = currentTime
}