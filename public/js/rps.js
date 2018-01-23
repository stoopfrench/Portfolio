//Resets game.
var playerChoice = undefined;

var playerScore = 0;
var compScore = 0;
var drawScore = 0;

	document.getElementById("playerScore").innerHTML = ("WINS: " + playerScore);
 	document.getElementById("compScore").innerHTML = ("LOSES: " + compScore);
	document.getElementById("drawScore").innerHTML = ("DRAWS: " + drawScore);

//Player chose function:
function chooseOption(option) {
//Resets the game if another game was just played.
	var compImgResult = document.getElementById("compImg");
		compImgResult.src = "images/grey_blank.jpg";
		compImgResult.style.opacity = "";
		compImgResult.style.filter = "grayscale(0%)";
		compImgResult.style.transition = "none";

	var userImgResult = document.getElementById("userImg");
		userImgResult.src = "images/grey_blank.jpg"
		userImgResult.style.opacity = "";
		userImgResult.style.filter = "grayscale(0%)";

		userImgResult.style.transition = "none";

	if (playerChoice != undefined) {

		playerSelectionElement = document.getElementById(playerChoice);
		playerSelectionElement.style.backgroundColor = "";
	}

	playerChoice = option;

//Places the user's selection in the results section.
if (playerChoice == 'Rock') {

		var image = document.getElementById("userImg");
		image.src = "images/rock_blue.jpg";
	}

	else if(playerChoice == 'Paper') {

		var image = document.getElementById("userImg");
		image.src = "images/paper_blue.jpg";
	}

	else {

		var image = document.getElementById("userImg");
		image.src = "images/scissors_blue.jpg";
	}

	playerSelectionElement = document.getElementById(playerChoice);
//"Turns on" the play button once the user has made a choice.
	playButtonStateElement = document.getElementById("playButton");
	playButtonStateElement.style.opacity = 1;
//Styles the play button when the user clicks.
	playerSelectionElement = document.getElementById(option);
	playerSelectionElement.style.backgroundColor = "gold";

}

//Random selection of computer's move, places user selection image and running the main game.
function playGame() { 

	var compImgResult = document.getElementById("compImg");
	compImgResult.style.transition = "";

	var userImgResult = document.getElementById("userImg");	
	userImgResult.style.transition = "";

//Randomly selects the computer's choice.
var computerChoice = Math.random();

if (computerChoice <=0.33) {
	computerChoice = "Rock";
}
else if (computerChoice <=0.67) {
	computerChoice = "Paper";
}
else {
	computerChoice = "Scissors";
}
//Places the computer's selection in the results section.
	if (computerChoice == 'Rock') {

		var image = document.getElementById("compImg");
		image.src = "images/rock_blue.jpg";
	}

	else if(computerChoice == 'Paper') {

		var image = document.getElementById("compImg");
		image.src = "images/paper_blue.jpg";
	}

	else {

		var image = document.getElementById("compImg");
		image.src = "images/scissors_blue.jpg";
	}


//Main Game: runs a funtion the coompares the user and computer selection, determins the winner and opens an alert box to report the results.	
function compare(choice1,choice2) {

	var defaultMsg = "Please choose an option";
	var drawMsg = "It's a DRAW.";
	var winMsg = "You WIN!";
	var loseMsg = "You LOSE!";
	
	if (playerChoice == undefined) {

		setTimeout(function(){ alert(defaultMsg); }, 0);
		
	}
	if (playerChoice == computerChoice) {
		
		setTimeout(function(){ alert(drawMsg); }, 250);

		drawScore++;
	}
	else if (playerChoice == "Rock") {
		
		if (computerChoice == "Paper") {
			
			setTimeout(function(){ alert(loseMsg); }, 500);

			compScore++;

			var userImgResult = document.getElementById('userImg');
			userImgResult.style.opacity = 0.6;
			userImgResult.style.filter = "grayscale(100%)";

	
		}

			else {
			
			setTimeout(function(){ alert(winMsg); }, 500);
			
			playerScore++;

			var compImgResult = document.getElementById('compImg');
			compImgResult.style.opacity = 0.6;
			compImgResult.style.filter = "grayscale(100%)";
			
		}
	}
	else if (playerChoice == "Paper") {	
		
		if (computerChoice == "Scissors") {
			
			setTimeout(function(){ alert(loseMsg); }, 500);
			
			compScore++;

			var userImgResult = document.getElementById('userImg');
			userImgResult.style.opacity = 0.6;
			userImgResult.style.filter = "grayscale(100%)";
;


		}
			else {
			
			setTimeout(function(){ alert(winMsg); }, 500);
			
			playerScore++;

			var compImgResult = document.getElementById('compImg');
			compImgResult.style.opacity = 0.6;
			compImgResult.style.filter = "grayscale(100%)";

		}	
	}
	else if (playerChoice == "Scissors") {
		
		if (computerChoice == "Rock") {
			
			setTimeout(function(){ alert(loseMsg); }, 500);
			
			compScore++;

			var userImgResult = document.getElementById('userImg');
			userImgResult.style.opacity = 0.6;
			userImgResult.style.filter = "grayscale(100%)";
			
		}
			else {
			
			setTimeout(function(){ alert(winMsg); }, 500);
			
			playerScore++;

			var compImgResult = document.getElementById('compImg');
			compImgResult.style.opacity = 0.6;
			compImgResult.style.filter = "grayscale(100%)";
			
		}
	}

	document.getElementById("playerScore").innerHTML = ("WINS: " + playerScore);
	document.getElementById("compScore").innerHTML = ("LOSES: " + compScore);
	document.getElementById("drawScore").innerHTML = ("DRAWS: " + drawScore);
	
	
}

compare(playerChoice,computerChoice);

//Resets the "Play Button".
playButtonStateElement.style.opacity = "";
playButtonStateElement.style.backgroundColor = "";

playerSelectionElement.style.backgroundColor = "";

playerChoice = undefined;

}

//Resets the score counter.
function resetScore() {

	playerScore = 0;
	compScore = 0;
	drawScore = 0;

	document.getElementById("playerScore").innerHTML = ("WINS: " + playerScore);
	document.getElementById("compScore").innerHTML = ("LOSES: " + compScore);
	document.getElementById("drawScore").innerHTML = ("DRAWS: " + drawScore);

}

