
/*
console.log('just started from this program');
var out = require ('./modulea.js');

var start =Date.now();
/*
setTimeout(function (){
console.log(Date.now() -start);

for (var i=0 ;i<10000;i++){}
},1000);
setTimeout(function(){
console.log(Date.now()-start);
},2990);
*/

/*

console.log('stack traces');


function c(){
b();
}
function b(){
a();
}
function a(){
//throw new Error('throw lines has acutuall runing here');
}
c();

*/


console.log('this function is inside new files');
//console.log(out.number);

// include new functions from another module and use 

// a functional way to write like this 
var d =require ('./moduleb.js');

//var w = new d(3,5);

console.log(d.minus(1,3));

//a new method to test this required things

var k = require('./moduleb');
console.log(k.add(3,4));

//extension is not required here

//console.log(d.add(1,3));
//console.log(w);




// files handling system here

/*
var fs = require('fs');
fs.readFile('1.txt', function (err,contents){
 if (!err) console.log(contents);
}

*/