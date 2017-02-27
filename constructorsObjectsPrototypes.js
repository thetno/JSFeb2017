"use strict";

let aStudent = {
	name : "Unspecified",
	address : "Unspecified",
	courses : [],
	getCourseCount : function() {
		return this.courses.length;
	},
	getAddressLabel : function() {
		return this.name + "\n" + this.address;
	}
};

console.log(aStudent.name + " takes " + aStudent.getCourseCount() + " courses");
console.log("send mail to:\n" + aStudent.getAddressLabel());

let fred = Object.create(aStudent);
fred.name = "Fred";
console.log(fred.name + " takes " + fred.getCourseCount() + " courses");

let jim = Object.create(aStudent);
jim.name = "Jim";
console.log(jim.name + " takes " + jim.getCourseCount() + " courses");

let fred2 = Object.create(aStudent);
fred2.name = "Fred";
console.log(fred2.name + " takes " + fred2.getCourseCount() + " courses");

console.log("fred is fred2 ? " + (fred === fred2));

let fred3 = fred2;
console.log("fred2 is fred3 ? " + (fred2 === fred3));

function showObj(obj) {
	for (let k in obj) {
		console.log(k + ": " + obj[k]);
	}
	console.log("==========================")
}

fred3 = Object.create(aStudent);
showObj(aStudent);
showObj(fred3);

fred3.name = "Third Fred";
showObj(aStudent);
showObj(fred3);

function Student(name) {
	if (name !== undefined) {
		this.name = name;
	}
};
Student.prototype = aStudent;

let joe = new Student("joe");
console.log("joes name is " + joe.name);
console.log("joes address is " + joe.address);

showObj(joe);
aStudent.courses.push("Math");
console.log(aStudent);
console.log(joe);
console.log("joe takes: " + joe.courses);

function getAFancyFormat() {
	let rv = "Student:\n";
	rv += " name is " + this.name + "\n";
	rv += " address is " + this.address + "\n";
	for (let c of this.courses) {
		rv += " - " + c + "\n";
	}
	return rv;
}

aStudent.getFancyFormat = getAFancyFormat;

console.log(joe.getFancyFormat());
console.log('-----------------------');
console.log(fred.getFancyFormat());



//console.log("global name is " + name);
//Student(); // DO NOT DO THIS!!!
//console.log("global name is " + name);





