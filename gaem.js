
let eye;
function setup() {
	createCanvas(600, 500);
 	eye = loadImage('eye.png', 'eye has loaded', 'eye didnt load');
  plr = createSprite(width/2, height/2, 50, 50);
  plr.velocity.y;
  plr.velocity.x;
	plr.addImage(eye);
}


function draw() {
	background(0);
  drawSprites();
}

function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			plr.velocity.x = -5;
			break;
		case 39:
		case 68:
			plr.velocity.x = 5;
			break;
		case 38:
		case 87:
			plr.velocity.y = -5;
			break;
		case 40:
		case 83:
			plr.velocity.y = 5;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			plr.velocity.x = 0;
			break;
		case 39:
		case 68:
			plr.velocity.x = 0;
			break;
		case 38:
		case 87:
			plr.velocity.y = 0;
			break;
		case 40:
		case 83:
			plr.velocity.y = 0;
			break;
	}
}
