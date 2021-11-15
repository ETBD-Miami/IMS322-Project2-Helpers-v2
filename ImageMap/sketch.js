let w, h, myImage

function preload() {
    myImage = loadImage("images/CPA152.jpeg")
}

function setup() {
    w = windowWidth/2
    h = w 
    createCanvas(w, h).parent("p5-container")
}

function draw() {
    image(myImage, 0, 0, w, h)
    fill(255, 255, 255, 100)
    circle(w*0.2, h*0.2, w*0.2) // again, you'll need to use relative (not absolute) values here
    circle(w*0.65, h*0.25, w*0.15)
    // it's up to you to figure out how to detect clicks/hovers in the circles - c'mon, we've covered this before!
}

function windowResized() {
    w = windowWidth/2
    h = w 
    resizeCanvas(w, h)
}