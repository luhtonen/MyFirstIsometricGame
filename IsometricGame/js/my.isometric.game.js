$(function() {
	var canvas = document.getElementById('game');
	
	// Force canvas to dynamically change its size to
	// the same width/height as the browser window
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	
	var ctx = canvas.getContext('2d');
	
	// Fill the screen with a blue gradient
	var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	grd.addColorStop(0, "#ceefff");
	grd.addColorStop(1, "#52bcff");
	
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var phrase = "Click or tap the screen to start the game";
	ctx.font = 'bold 16px Arial, sans-serif';
	var mt = ctx.measureText(phrase);
	var xcoord = (canvas.width / 2) - (mt.width / 2);
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText(phrase, xcoord, 30);
});