"use strict";

let arrOne = [ 1, 2, 3, 4, 5 ];

let[x, , y] = arrOne; 
console.log("arrOne: " + arrOne);
console.log("x: " + x);
console.log("y: " + y);

[y, x] = [ x, y ];
console.log("x: " + x);
console.log("y: " + y);

let myObj = {
		name : "Fred",
		address : "Over here",
		count : 10
};

let { name : vName, address : vAddress } = myObj;
console.log("vName is " + vName + " at: " + vAddress);
console.log(myObj);