var lengthOfLine = 100;
var slider;
var angle;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, PI, 0.5, 0.01);
  slider.position(240, 650);
}

function draw() {
  //defining starting values and calling the recursive function branch()
  background(55);
  stroke(255);
  var lineThickness = 10;
  strokeWeight(lineThickness);
  translate(300,height);
  branch(150, lineThickness);
}

//recursive function to draw the tree
function branch(lengthOfLine, lineThickness){
  line(0, 0, 0, -lengthOfLine);
  translate(0, -lengthOfLine);
  angle = slider.value();
  strokeWeight(lineThickness*0.67);
  if(lengthOfLine > 2){
	//drawing first on right side
    push();
    rotate(angle);
    branch(lengthOfLine*0.67, lineThickness*0.67);
    pop();
	//then drawing on left side by adding - to the angle
    push();
    rotate(-angle);
    branch(lengthOfLine*0.67, lineThickness*0.67);
    pop();  
  }
}