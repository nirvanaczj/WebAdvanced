/*console.log("hello")


datatypes

["string"
  21.1
  10
  Boolean:true/false]

  array:["ab",
  		  212,
  		  ['nested','another','array'],
  		  Boolean:true
  		  ]
  object
  {
  		'key':'value',
  		'anotherkey':false,
  		'key3':[1,2,3],
  		'key4':{
  			'keyvalue':'1da',
  			'object':{
  				'title':'anotherone',
  				'wd':12
  			}
  		}



  	[1,2,3,4].length

  	[1,2,3,4]*/




/*
var myVariable = 'this is a string';

var miniute = 17;

var classname = 'psam3210';
*/
/**
var myArray = [1.23,1,'the'];
myArray = [2,3,4];
myArray ='string';


var addition = (myOtherNumberz + 4) / myNumber //8
var addition = myOtherNumberz + 4 / myNumber //8

var myFirstValue = 5;
var mySecondValue = 5;

5 > 3 //true
5 > 6 //false
5 > 5 //false
5 >= 5 //true
5 <= 5 //true
5 == 5 //true
5 == 4 //false = is used to defined.  == is used to say 'equal'
5 === 5 //true === also compare datatype
5 == '5'//true
5 === '5'//false
!= not equal (type-converting comparison) 2 != 2 false
2 != 3 //true
"hi" != "hi" //false
"hi" != "hello" //true
2 != "2" //false

!== //strict comparison
2 !== "2" //true
2 !== 2 //false
2 !== 3 //true

**/
/**
	var myFirstValue = 5;
	var mySecondValue = 4;

if (myFirstValue === mySecondValue){

		console.log("hello! from if")

}else if (myFirstValue === 3){

		console.log("hello! from elsewhere")

}else{

		console.log('hello! from else else')
}

var myFirstValue = 5;
var mySecondValue = 4;
var myThirdValue = 'sample string'

if ( myFirstValue === mySecondValue && myThirdValue === 'sample string'){

	console.log('hello from if!')
}

if ( myFirstValue === mySecondValue || myThirdValue === 'sample string'){

	console.log('hello from or if !')
}


var myModuleValue = 102 % 102;
console.log(myModuleValue) 

var iteration = 1;
console.log("firstIteration:",iteration);

iteration ++;
console.log("secondIteration:😪",iteration)


var i

i = i + 1;

/*for (var i = 0; i < 1000; i++) {
 console.log(i)
}*/
/*
var Things = [1,[1],4,false,'e1',[12.12,1]]

for (var i = 0; i < Things.length; i++){
 console.log(Array.isArray(Things[i]))
}
*/

//get our element by its html id
var myWrapper = document.getElementById('wrapper');
console.log(myWrapper.innerHTML)

// += is how we add text to the existing text
/*myWrapper.innerHTML += 'string';
*/
/*

; transform: rotate('+(10+i)+'deg);*/
//for loop runs 100 times to add 'string' in HTML.	
for (var i = 0;i < 50; i++){
	/*myWrapper.innerHTML += '<h1> style="font-size:' + 15 + i + 'px;">1</h1>;*/
	myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb('+255 + i +','+(5*i)+',0)"></div>';
}

