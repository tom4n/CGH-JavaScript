var Images = {
	imgsDB: [
        ["dog1-1.png",
        "dog1-2.png",
        "dog1-3.png"],
        ["dog2-1.png",
        "dog2-2.png",
        "dog2-3.png",],
        ["dog3-1.png",
        "dog3-2.png",
        "dog3-3.png",]
    ],
    imgpos: [0, 0, 0]
}

function placeImage(imgpos1, imgToggle) {
	Images.imgpos[imgpos1 - 1] = imgToggle;        // Set image pointer in Object array
	var imageName = "#img" + imgpos1.toString();   // create JQUERY handler
	$(imageName).attr("src", "./img/" + Images.imgsDB[imgToggle][imgpos1 - 1]);

}

function setImagesRandom() {
	for (var i=1; i <= 3; i++)
	{
		var num1 = Math.floor ((Math.random() * 3));
		placeImage(i, num1);
	}
}

function imageClick(imgpos1) {
	var imgToggle = Images.imgpos[imgpos1 - 1];
	if (imgToggle === 0) {
		placeImage(imgpos1, 1);
	}
	else if (imgToggle === 1) {
		placeImage(imgpos1, 2);
	}
	else if (imgToggle === 2) {
		placeImage(imgpos1, 0);
	}
	
}

function checkSet() {
	var setImg = Images.imgpos[0];
	var setFlag = true;
	for (var i=1; i < 3; i++)
	{
		if (Images.imgpos[i] !== Images.imgpos[i - 1]) {
			setFlag = false;
		}
	}

	if (setFlag) {
		$('img').css("box-shadow", "4px 4px 9px red")
	}
	else {
		$('img').css("box-shadow", "2px 3px 3px black")
	}
}

var main = function () 
{

	setImagesRandom();

	$("#dog1").click(function(){
		imageClick(1);
		checkSet();
	})
	$("#dog2").click(function(){
		imageClick(2);
		checkSet();
	})
	$("#dog3").click(function(){
		imageClick(3);
		checkSet();
	})
}

$(document).ready(main());