
window.onload = function() {
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	var State = {
			_current: 0,
			INTRO: 0,
			LOADING: 1,
			LOADED: 2
	};
	
	window.addEventListener('click', handleClick, false);
	window.addEventListener('resize', doResize, false);
	
	doResize();

	function handleClick() {
		State._current = State.LOADING;
		fadeToWhite();
	}
	
	function doResize() {
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		
		switch(State._current) {
			case State.INTRO:
				showIntro();
				break;
		}
	}
	
	function fadeToWhite(alphaVal) {
		// If the function hasn't received any parameters, start with 0.02
		var alphaVal = (alphaVal == undefined) ? 0.02 : parseFloat(alphaVal) + 0.02;
		
		// Set the color to white
		ctx.fillStyle = "#FFFFFF";
		// Set the Global Alpha
		ctx.globalAlpha = alphaVal;
		
		// Make a rectangle as big as the canvas
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		if (alphaVal < 1.0) {
			setTimeout(function() {
				fadeToWhite(alphaVal);
			}, 30);
		} else {
			State._current = State.LOADED;
		}
	}
	
	function showIntro() {
		var phrase = "Click or tap the screen to start the game";
	
		// Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		// Make nice blue gradient
		var grd = ctx.createLinearGradient(0, canvas.width, canvas.height, 0);
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
}