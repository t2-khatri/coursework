let rectWidth = 10;

function setup() {
  createCanvas(480, 480);
  background(240);
  fill(150, 0, 150); // Initial fill color
  noStroke();

  // Initialize leading rectangle to appear at the canvas center
  rectMode(CENTER);
}

function draw() {
  background(240, 240, 255); // Light blue background for better visibility

  // Draw rectangle that follows mouse movements smoothly
  let targetX = mouseX;
  let targetY = mouseY;
  let easing = 0.05;
  
  rectWidth += (targetX - rectWidth) * easing; // Smooth movement
  rect(targetX, targetY, 30, 30); // Draw rectangle at the mouse position

  if (mouseIsPressed) {
    fill(random(255), random(255), random(255)); // Change color on mouse press
  } else {
    fill(150, 0, 150);
  }

  // Draw a continuous line with stroke weight based on speed
  strokeWeight(dist(mouseX, mouseY, pmouseX, pmouseY));
  stroke(0, 102);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // Clear the canvas and reset background if "R" key is pressed
    background(240);
  }
}
