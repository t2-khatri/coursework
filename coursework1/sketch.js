let numCircles = 12; // Number of circles in the pattern
let radius = 150; // Radius of the circular pattern
let angleOffset = 0; // For rotating the pattern
let speed = 0.01; // Speed of rotation
let circles = []; // Array to hold circle objects

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < numCircles; i++) {
        circles.push(new Circle(i)); // Create and add circles to the array
    }
}

function draw() {
    background(255); // White background
    translate(width / 2, height / 2); // Move the origin to the center of the canvas
    angleOffset += speed; // Update angle offset for rotation

    for (let circle of circles) {
        circle.update(); // Update circle position
        circle.display(); // Display the circle
    }
}

// Circle class
class Circle {
    constructor(index) {
        this.index = index; // Index of the circle in the array
        this.size = 40; // Size of each circle
        this.angle = TWO_PI / numCircles * index; // Initial angle for placement
    }

    update() {
        // Calculate position based on radius, angle, and offset
        this.x = radius * cos(this.angle + angleOffset);
        this.y = radius * sin(this.angle + angleOffset);
    }

    display() {
        fill(100, 150 + this.index * 10, 200); // Vary color based on index
        ellipse(this.x, this.y, this.size, this.size); // Draw circle
    }
  }
