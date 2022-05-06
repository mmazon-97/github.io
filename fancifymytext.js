//function to set font size to 24pt, as well as trigger "Hello, World!" alert
function enlargeText(){
	alert("Hello, world!");
	document.getElementById("textfield").style.fontSize = "24pt"; 
}

//fancify text function, sets "boringText" to false, and then bolds, underlines, and sets textfield to navy blue color
function fancifyText(){ 
	document.getElementById("boringText").checked = false; 
	document.getElementById("textfield").style.fontWeight = "bold";
	document.getElementById("textfield").style.color = "#000080";
	document.getElementById("textfield").style.textDecoration = "underline"; 
}

//boring text function, sets "fancifyText" to false, and then resets text to black, 12pt font, and removes underline
function boringText(){ 
	document.getElementById("fancifyText").checked = false; 
	document.getElementById("textfield").style.fontWeight = "normal"; 
	document.getElementById("textfield").style.color = "#000000"; 
	document.getElementById("textfield").style.textDecoration = "none"; 
	document.getElementById("textfield").style.fontSize = "12pt"; 
}

//mooText function, adds "-moo" to the end of each word as long as there is a space after the word
function mooText(){
		var str = document.getElementById("textfield").value; 
		var parts = str.split(" ");
		str = parts.join("-moo ");
		document.getElementById("textfield").value = str + " ";
		
}
	