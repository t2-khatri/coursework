let rectColor;

function setup() {
  createCanvas(800, 600);
  rectColor = color(150, 0, 150); // Initial color of the rectangle
  noStroke(); // No border for shapes
}

function draw() {
  background(220); // Light gray background

  // Draw a rectangle with the current color
  fill(rectColor);
  rect(width / 2 - 75, height / 2 - 25, 150, 50);

  // Display instructions
  fill(0); // Black text
  textSize(20);
  textAlign(CENTER);
  text("Click to change rectangle color", width / 2, height - 40);
}

function mousePressed() {
  // Change the rectangle color randomly on mouse press
  rectColor = color(random(255), random(255), random(255));
}
