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
		drawStuff(); 
}
resizeCanvas();

function drawStuff() {
	ctx.beginPath();
	for (i = 20; i < canvas.height; i += 50) {
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
	}
	for (i = 20; i < canvas.width; i += 50) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
	}
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#fff';
	ctx.stroke();
}