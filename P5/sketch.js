let cSize = 0;
let popCount = 0;

function setup() {
    createCanvas(400, 400).parent("p5-container");
  }
  
  function draw() {
    background(220);
    strokeWeight(10);
    circle(width/2, height/2, cSize);
    if ((cSize += 5) > width) {
      cSize = 0;
      fill(random(255), random(255), random(255));
      if ((popCount += 1) > 10) {
        stroke(random(255), random(255), random(255));
        popCount = 0;
      }
    }
  }