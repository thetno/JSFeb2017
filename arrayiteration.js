"use strict";

let myArray = ["hello", "goodbye"];
myArray.__proto__.newStuff = "hello, how's that for a surprise";
for (let k in myArray) {
	console.log("key is " + k);
	console.log(" - value is " + myArray[k]);
}

for (let i = 0; i < myArray.length; i++) {
	console.log("indexing give: " + myArray[i]);
}

