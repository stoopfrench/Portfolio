

var display = document.getElementById('screen');


function printToScreen(x) {

		display.value += x;
	
		if (x === 'AC') {

		display.value = "";
	}
}

function equalKey() {

	var equation = display.value;
	var results = eval(equation);
	display.value = results;

		
	document.getElementById("history").innerHTML += equation + " = " + results + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function squared() {

	number = display.value;
	squaredNumber = Math.pow(number, 2);
	display.value = squaredNumber;

	document.getElementById("history").innerHTML += number + "&sup2;" + " = " + squaredNumber + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function cubed() {

	number = display.value;
	cubedNumber = Math.pow(number, 3);
	display.value = cubedNumber;

	document.getElementById("history").innerHTML += number + "&sup3;" + " = " + cubedNumber + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function squareRoot() {

	number = display.value;
	squareRootNumber = Math.sqrt(number);
	display.value = squareRootNumber;

	document.getElementById("history").innerHTML += "sqrt" + "(" + number +")" + " = " + squareRootNumber + "<br>";	
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;

}

function cubeRoot() {

	number = display.value;
	cubeRootNumber = Math.cbrt(number);
	display.value = cubeRootNumber;

	document.getElementById("history").innerHTML += "cbrt" + "(" + number +")" + " = " + cubeRootNumber + "<br>";	
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function sin() {

	number = display.value;
	sinNumber = Math.sin(number);
	display.value = sinNumber;

	document.getElementById("history").innerHTML += "sin" + "(" + number +")" + " = " + sinNumber + "<br>";	
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;

	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function cos() {

	number = display.value;
	cosNumber = Math.cos(number);
	display.value = cosNumber;

	document.getElementById("history").innerHTML += "cos" + "(" + number +")" + " = " + cosNumber + "<br>";	
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;

	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function tan() {

	number = display.value;
	tanNumber = Math.tan(number);
	display.value = tanNumber;

	document.getElementById("history").innerHTML += "tan" + "(" + number +")" + " = " + tanNumber + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;	

	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function randomNumber() {

	var baseNumber = document.getElementById("randomNumberBase").value;
	var ranNumber = Math.trunc(Math.random() * baseNumber);
	display.value = ranNumber;

	if(baseNumber == 1) {

	var defaultRanNumber = Math.random();
	display.value = defaultRanNumber;

	document.getElementById("history").innerHTML += defaultRanNumber + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;	

	}
 	else {
	document.getElementById("history").innerHTML += ranNumber + "<br>";
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;	
	}
	
	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 1;
}

function backspace() {

	var number = display.value;
	var length = number.length - 1;
	var newNumber = number.substring(0,length);
	display.value = newNumber;
}

function pi() {

	display.value = Math.PI * 1;
}

function plusMinus() {

	x = display.value;
	x = eval(x * -1);
	display.value = x;
}

function clearHistory() {

	document.getElementById("history").innerHTML = "";

	var clearHistoryElement = document.getElementById('clearHistoryButton');
	clearHistoryElement.style.opacity = 0.3;
}

function toggleHistory() {

	var th = document.getElementById('historyList');
	
	if (th.style.display == "block") {

		th.style.display = "none";
	}
	else {

		th.style.display = "block";
	}

	var thb = document.getElementById('toggleHistoryButton');

	if (thb.style.color == "white") {

		thb.style.color = "grey";
	}
	else {

		thb.style.color = "white";
	}
}

function toggleMoreOptions() {

var tmo = document.getElementById('moreOptions');
	
	if (tmo.style.display == "block") {

		tmo.style.display = "none";
	}
	else {

		tmo.style.display = "block";
	}
	
	var tmob = document.getElementById('toggleOptionsButton');

	if (tmob.style.color == "white") {

		tmob.style.color = "grey";
	}
	else {

		tmob.style.color = "white";
	}
}

