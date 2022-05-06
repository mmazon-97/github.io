/*
 * Starter file 
 */
 
 //Test to see if js file is being ran on web browser 
 console.log("Window loaded succesfully!");
  
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
	document.getElementById("encrypt-it").addEventListener('click',handleClick);
	document.getElementById("reset").addEventListener('click', resetFunction);
	document.getElementById("size12").addEventListener('click', setFont12); 
	document.getElementById("size24").addEventListener('click', setFont24);
	document.getElementById("all-caps").addEventListener('click', setAllCaps);
	
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
  //click handler
  function handleClick(){
	  console.log("Button clicked!"); 
	  let inputText = document.getElementById("input-text"); 
	  let result = cipher(inputText); 
	  document.getElementById("result").textContent = result; 
  }
  
  //shift cipher function
  function cipher(text){
	  text = text.value.toLowerCase();
	  let result = "";
	  for(let i = 0; i < text.length; i++){
		  if(text[i] < 'a' || text[i] > 'z'){
			  result += text[i]; 
		  } else if (text[i] == 'z'){
			  result += 'a';
		  } else { 
			let letter = text.charCodeAt(i); 
			let resultLetter = String.fromCharCode(letter + 1); 
			result += resultLetter;
		  }
	  }
	  
	  return result; 
  }
  
  function resetFunction(){ 
  document.getElementById("input-text").value = ""; 
  document.getElementById("result").textContent = ""; 
  }
  
  //selected by default, but if element with id "size12" is checked, sets font size to 12
  function setFont12() { 
	if(document.getElementById("size12").checked){
	document.getElementById("input-text").style.fontSize = "12pt"; 
	}
  }
  
  //sets text font to 24 if element with id "size24" is selected
  function setFont24() { 
	if(document.getElementById("size24").checked){ 
	document.getElementById("input-text").style.fontSize = "24"; 
	}
  }
  
  //checks to see if "all-caps" is set to true or false and changes text styling to uppercase/lowercase respectively 
  function setAllCaps(){
	  if(document.getElementById("all-caps").checked){
		  document.getElementById("input-text").style.textTransform = "uppercase";
	  } else if(!document.getElementById("all-caps").checked) {
		document.getElementById("input-text").style.textTransform = "lowercase";
	  }
  
  }
  
})();
