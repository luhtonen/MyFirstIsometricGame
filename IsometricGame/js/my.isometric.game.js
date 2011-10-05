var canvas;
var ctx;
var image;

$(function() {
	canvas = document.getElementById('game');
	
	// Force canvas to dynamically change its size to
	// the same width/height as the browser window
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	
	ctx = canvas.getContext('2d');
	console.log("creating image");
	image = new Image();
	image.src = "images/logo.png";
	ctx.drawImage(image, 0, 0);
	console.log("image drawn");
//	showIntro();
});

function showIntro() {
	var phrase = "Click or tap the screen to start the game";

	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// Make nice blue gradient
	var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	grd.addColorStop(0, "#ceefff");
	grd.addColorStop(1, "#52bcff");
	
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var logoImage = new Image();
	logoImage.src = 'images/logo.png';
	
	// Store the original width value so that we can keep 
	// the same width/height ratio later
	var originalWidth = logoImage.width;
	
	// Compute the new width and height values
	logoImage.width = Math.round((50 * document.body.clientWidth) / 100);
	logoImage.height = Math.round((logoImage.width * logoImage.height) / originalWidth);
	
	// create a small utility object
	var logo = {
			img: logoImage,
			x: (canvas.width/2) - (logoImage.width/2),
			y: (canvas.height/2) - (logoImage.height/2)
	}
	
	// Present the image
	ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width, logo.img.height);
	
	// Change color to black
	ctx.fillStyle = '#000000';
	ctx.font = 'bold 16px Arial, sans-serif';
	var mt = ctx.measureText(phrase);
	var xcoord = (canvas.width / 2) - (mt.width / 2);
	ctx.fillText(phrase, xcoord, (logo.y + logo.img.height) + 50);
}