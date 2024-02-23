function creature(ls, yes) {
  this.lifespan = ls;
  this.walk = yes;
}
creature.prototype.breath = function () {
  console.log("brething........");
};

let creature1 = new creature(100, "yes");
// console.log(creature1);

function person(first, last, a) {
  this.firstName = first;
  this.lastName = last;
  this.age = a;
}

person.prototype.puraName = function () {
  console.log(this.firstName + " " + this.lastName);
};

// person.prototype.__proto__ = Object.create(creature.prototype);
// creature.prototype.__proto__ = Object.create(person);
person.prototype.__proto__ = Object.create(creature.prototype);

let person1 = new person("susheel", "Vishwakarma", 22);
let person2 = new person("vartika", "Bhujbal", 22);
let person3 = new person("shivam", "Singh", 22);

console.log(person1);
console.log(person2.puraName());
console.log(person2.breath());
