/**
 * Project 1 - Interactive Image
 * Name: Andrew Rowe
 * Comments: I worked on drawing a spider that will (1a) bounce within the
 * given canvas, (1b) random speed @ start of program, (1c) appear to zoom
 * in and out from top of page, interact to a click of the mouse by (2a) 
 * blinking its eyes, (2b) changing the trajectory and (2c) random speed.
 *
 * I used the professor's video notes given in Part 2 on translate(),
 * rotate(), scale(), along with how to use variables.
 */


// Global Variables
var x = 0;  // x coordinate
var y = 0;  // y coordinate
var r = 0;  // Rotate speed
var s = 1;  // Scale size
var xSpeed = 0;  // Speed of x coordinate
var ySpeed = 0;  // Spped of y coordinate
var rSpeed = 0;  // Speed of rotation
var eyeColor = 0;


function setup() {
  createCanvas(600, 400);      // Create a 600x400 pixel drawing canvas
  xSpeed = random(-5, 5);      // Randomly selects a horizontal speed
  ySpeed = random(-5, 5);      // Randomly selects a vertical speed
  rSpeed = random(-.05, .05);  // Randomly selects speed of ratation
}


function draw(){
  // This function runs again and again (60x per second)
  // Let's draw a spider
  background(200); // Light gray background
  translate(x, y); // Used to determine the (0, 0) origin point
  rotate(r);       // Command will rotate the spider
  r += rSpeed;     // Speed of rotation
  s = y/height;    // Makes the spider bigger the further down the canvas on the vertical access it goes
  scale(s);

  
  /** Conditional Exection Statement
  *   When x or y is greater than, then bounces back and stays in canvas */
  x += xSpeed;
  if(x > width || x < 0) {
    xSpeed *= -1;
  }
  
  y += ySpeed;
  if(y > height || y < 0) {
    ySpeed *= -1;
  }

  
  /** Drawing of the Spider (Steps 1 - 5)
  *   Step 1 - Body */
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(255, 95, 31);        // Fill in the body orange
  ellipse(0, 0, 100, 100);  // Body of the spider
  

  /** Step 2 - Eyes */
  strokeWeight(3);           // Thickness of line
  stroke(0, 0, 0);           // Black
  fill(eyeColor);            // Fills the color the eyes
  ellipse(-20, -50, 20, 20); // Left eye
  ellipse(-20, -50, 2, 2);   // Left pupil
  ellipse(20, -50, 20, 20);  // Right eye
  ellipse(20, -50, 2, 2,);   // Right pupil
  fill(255, 95, 31);

  
  /** Step 3 - Mouth */
  strokeWeight(3);
  stroke(0, 0, 0);   
  arc(0, -10, 50, 60, PI+HALF_PI+QUARTER_PI, PI+QUARTER_PI);


  /** Step 4 - Web */
  strokeWeight(3);
  stroke(0, 0, 0);
  line(0, -50, 0, -200);  // Spider web


  /** Step 5 - Legs start from top and end at bottom */
  strokeWeight(3);
  stroke(0, 0, 0);
  // Left top leg
  line(-41, -30, -90, -50);
  line(-90, -50, -120, -10);
  // Right top leg
  line(41, -30, 90, -50);
  line(90, -50, 120, -10);
  // Left 2nd Leg
  line(-47, -20, -89, -30);
  line(-89, -30, -99, -10);
  // Right 2nd leg
  line(47, -20, 89, -30);
  line(89, -30, 99, -10);
  // Left 3rd Leg
  line(-51, -10, -105, -20);
  line(-105, -20, -115, 0);
  // Right 3rd Leg
  line(51, -10, 105, -20);
  line(105, -20, 115, 0);
  // Left 4th Leg
  line(-52, 0, -80, -10);
  line(-80, -10, -90, 10);
  // Right 4th Leg
  line(52, 0, 80, -10);
  line(80, -10, 90, 10);


  /** Conditional execution of eye color
  *   Eye color will change only while mouse is currently clicked */
  if(mouseIsPressed){
    eyeColor = 0;    // Black eyes
  } else {
    eyeColor = 255;  // White eyes
  }
}


/** A new trajectory will execute once after every click of the mouse */
function mousePressed() {
  xSpeed = random (-5, 5);     // Randomly selects a horizontal speed
  ySpeed = random (-5, 5);     // Randomly selects a vertical speed
  rSpeed = random (-.05, .05); // Randomly selects speed of rotation
}