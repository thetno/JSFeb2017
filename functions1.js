"use strict";

function doStuff(one, two, three) {
	let argArray = Array.from(arguments);
	console.log("one is " + one);
	console.log("two is " + two);
	if (three !== undefined) {
		console.log("three args, three is " + three);
	}
	console.log("--------------------------");
	for (let i = 0; i < argArray.length; i++) {
		console.log("arg " + i + " is " + argArray[i]);
	}
	console.log("--------------------------");
	console.log("--------------------------");
}

doStuff("Fred", "Jones");
doStuff("Fred", "Jones", "Mr.");

function moreStuff(one = "default") {
	console.log("one is " + one);
}

moreStuff();
moreStuff("Banana");

function dodgyStuff(one) {
	one = one || "default";
	console.log("dodgy one " + one);
}

dodgyStuff();
dodgyStuff("Real value");
dodgyStuff(0);
dodgyStuff(99);
dodgyStuff("");

function olderStuff(one) {
	one = one === undefined ? "default" : one;
	console.log("older one " + one);
}

olderStuff();
olderStuff("Real value");
olderStuff(0);
olderStuff(99);
olderStuff("");

function newVarArgs(one, two, ...myArguments) {
	console.log(">> " + one);
	console.log(">> " + two);
	for (let v of myArguments) {
		console.log("> " + v);
	}
	console.log("------------------------------");
}

newVarArgs("one", 99, new Date());
newVarArgs("three", "four");











