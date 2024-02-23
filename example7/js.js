function person(first, last, a) {
  this.firstName = first;
  this.lastName = last;
  this.age = a;
}

person.prototype.puraName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let person1 = new person("susheel", "Vishwakarma", 22);
let person2 = new person("vartika", "Bhujbal", 22);
let person3 = new person("shivam", "Singh", 22);

console.log(person1);
console.log(person2);
console.log(person3);
