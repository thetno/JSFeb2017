//"use strict";
console.log("Hello, World!");

function doStuff() {
// console.log("number is undefine? " + (number === undefined));
// console.log(number);
	number = 99;
	console.log("finished");
}

function showObject(obj) {
	for (let k in obj) {
		console.log("found key " + k);
		console.log("  - value is " + obj[k]);
	}
}

doStuff();
console.log("number is " + number);
console.log("finished everything");

let anObject = {
		[Symbol.iterator]: function() {},// blah blah
		name: "fred"
};
console.log("anObject.name is " + anObject.name);
let na = "na";
let me = "me";
console.log("anObject['name'] is " + anObject["name"]);
console.log("anObject[na + me] is " + anObject[na + me]);

console.log("anObject.newThing is " + anObject.newThing);

showObject(anObject);

anObject.newThing = "a new string";
console.log("anObject.newThing is " + anObject.newThing);

showObject(anObject);

delete anObject.newThing;
console.log('deleted newthing');
showObject(anObject);
