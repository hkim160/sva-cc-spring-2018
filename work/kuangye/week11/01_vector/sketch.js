
function setup(){
 createCanvas(500, 500);
	
}

function draw() {
 background(200);
 var v1 = createVecor(mouseX, mouseY);
	
	
 //translate(width/2, height/2);
 line (0, 0, v1.x, v1.y);
	
	
 rect(0, 0, v1.mag(), 10);
}