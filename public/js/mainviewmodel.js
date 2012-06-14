//function createAPerson(name, age) {
//	this.name = name;
//	this.age = age;



function viewModel() {
var self = this;

var james = {
	name: "James",
	age: 32
};

var frank = {
	name: "Frank",
	age: 31
};

self.people = ko.observableArray([james,frank]);

 
};

