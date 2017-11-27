function setup() {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent('mysketch_id');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

var sketch1 = function( p ) {
    p.setup = function() {
        p.createCanvas(400, 400);
    };
};
var myp5_1 = new p5(sketch1, 'mysketch_id');
