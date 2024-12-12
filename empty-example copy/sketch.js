let brushShape = 'circle';

function setup() {
  createCanvas(480, 480);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    switch (brushShape) {
      case 'circle':
        fill(0); // Black circle
        ellipse(mouseX, mouseY, 20, 20);
        break;
      case 'square':
        fill(150); // Gray square
        rect(mouseX, mouseY, 20, 20);
        break;
      case 'triangle':
        fill(100, 150, 200); // Blue triangle
        triangle(mouseX, mouseY, mouseX - 10, mouseY + 20, mouseX + 10, mouseY + 20);
        break;
    }
  }
  
  // Instructions
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Press 'C' for Circle, 'S' for Square, 'T' for Triangle", width / 2, height - 30);
}

function keyPressed() {
  // Toggle brush shape based on key press
  if (key === 'c' || key === 'C') {
    brushShape = 'circle';
  } else if (key === 's' || key === 'S') {
    brushShape = 'square';
  } else if (key === 't' || key === 'T') {
    brushShape = 'triangle';
  }
}
