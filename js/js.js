var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		/**
		 * Your drawings need to be inside this function otherwise they will be reset when 
		 * you resize the browser window and the canvas goes will be cleared.
		 */
		draw1(); 
}
resizeCanvas();

function draw1() {
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 40;
	
	var coords = [ [centerX-60,centerY-60], [centerX+60,centerY+60], [centerX-60,centerY+60] ];
	ctx.fillStyle = '#b0e4ff';
	for(var i = 0; i < coords.length; i++){
		ctx.beginPath();
		ctx.arc(coords[i][0], coords[i][1], radius, 0, Math.PI * 2, false);
		ctx.fill();
	}
	
	ctx.beginPath();
		ctx.arc(centerX+60, centerY-60, 47, 0, Math.PI * 2, false);
		ctx.fill();
}

//function draw1() {
//	ctx.beginPath();
//	// regular horizontal lines
//	for (i = 20; i < 230; i += 70) {
//		ctx.moveTo(0, i);
//		ctx.lineTo(canvas.width, i);
//	}
//	// skewed horizontal line
//	ctx.moveTo(0, 230);
//	ctx.lineTo(canvas.width, 240);
//	// regular horizontal lines
//	for (i = 300; i < canvas.height; i += 70) {
//		ctx.moveTo(0, i);
//		ctx.lineTo(canvas.width, i);
//	}
//	
//	// regular vertical lines
//	for (i = 20; i < canvas.width; i += 70) {
//		ctx.moveTo(i, 0);
//		ctx.lineTo(i, canvas.height);
//	}
//	ctx.lineWidth = 6;
//	ctx.strokeStyle = '#000';
//	ctx.stroke();
//}