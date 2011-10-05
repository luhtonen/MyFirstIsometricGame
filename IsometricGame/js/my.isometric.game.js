$(function() {
	var canvas = document.getElementById('game');
	
	// Force canvas to dynamically change its size to
	// the same width/height as the browser window
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	
	var ctx = canvas.getContext('2d');
	
	// Fill the screen with a black background
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var phrase = "Click or tap the screen to start the game";
	ctx.font = 'bold 16px Arial, sans-serif';
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText(phrase, 10, 30);
});