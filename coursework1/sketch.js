function setup() {
  createCanvas(300, 300); // 9 cm x 9 cm at 100 DPI is about 354 x 354 pixels
  noLoop(); // Prevents continuous drawing
}

function draw() {
  background(255); // White background
  for (let i = 0; i < 20; i++) { // 20 random circles
    let x = random(width);
    let y = random(height);
    let size = random(10, 50); // Random circle size
    fill(0, random(255)); // Black fill with random alpha
    ellipse(x, y, size);
  }
}