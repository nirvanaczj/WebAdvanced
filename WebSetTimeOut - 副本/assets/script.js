/*
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend', '<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">5</div>')},1000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">4</div>'},2000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">3</div>'},3000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">2</div>'},4000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "coundown" style="font-size:15rem;font-family:calibri;color:white">1</div>'},5000);
setTimeout( function(){document.getElementById('wrapper').innerHTML ='<div class = "moving"></div>'},5500);
setTimeout( function(){document.body.style.backgroundColor = "#B7EFFF";},5500);
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend','<div class = "sliding"></div>')},5500);
setTimeout( function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend','<div class = "slidingUp"></div>')},5500);
setTimeout(function(){setInterval(function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend',`<div class = "sliding" style="top:20%"></div>`)},1000)},5500)
setTimeout(function(){setInterval(function(){document.getElementById('wrapper').insertAdjacentHTML('beforeend',`<div class = "sliding" style="top:60%"></div>`)},1000)},5500)


var myDiv = document.getElementById('wrapper')
var theSameDiv = document.querySelector('#wrapper')
//!!! only return the first element.!!!
var theSameDivTheButton = document.querySelector('#wrapper button:nth-child(2)')

console.log(theSameDivTheButton)

var listItem = document.querySelector('.list-item')

var listItems = document.getElementsByClassName('list-item')
var listItems1 = document.querySelectorAll('.list-item')
console.log(listItem)
console.log(listItems)
console.log(listItems1)

*/

//eventSelector
/**
var myButton = document.querySelector('.turnRed')
//myButton.style.backgroundColor ='red';


var isThisRed = false;

var turnThisRed = function(){
	if (isThisRed === false){
	myButton.style.backgroundColor ='red';
	isThisRed = true;
}else{
	myButton.style.backgroundColor ='white';
	isThisRed = false;
}
}


myButton.addEventListener('click',turnThisRed)


**/
//mouseMove

var test = document.querySelector('.test')

var fontSize = function(event)
{
	//console.log(event.pageX)
	test.style.left = `${event.pageX}px`
	test.style.top = `${event.pageY}px`
	//document.body.insertAdjacentHTML('beforeend',`<div style="width:${event.pageX}px"></div>`)
}


window.addEventListener('mousemove',fontSize)
