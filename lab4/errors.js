/*
	Author: Sarah "done broke it" Carruthers
	File: errors.js
	Purpose: I broke it, you fix it
*/

//when div is clicked, move the div to a new random location
function moveMe(){
	var x, y;
	x = Math.random()*(window.innerWidth - 200);
	y = Math.random()*200;
	var el = document.getElementsByClassName("square")[0];
	el.style.top = y+"px";
	el.style.left = x+"px";
}

var x, y;
//should compute the value of xVal + yVal and put the answer in the readonly
//text input location
function compute(){
	x = document.getElementByID("xVal").value;
	y = document.getElementByID("yVal").value;
	var ans = parseInt(x) + parseInt(y);
	document.getElementByID("answer").value = ans;
}
