var input1, input2, val1,val2;
var button;
//executes only once
function setup() {
  createCanvas(400, 400);
  input1 = createInput().attribute("placeholder","Enter the first number");
  input1.position(5,60);
  input2 = createInput().attribute("placeholder","Enter your second number");
  input2.position(200,60);
  button = createButton("+");
  button.position(10,200);
  button.mousePressed(add);
}
function add () {
console.log(val1+val2);
}
function draw() {
  background(220);
  val1 = parseInt(input1.value());
  val2 = parseInt(input2.value());
}