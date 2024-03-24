function person(first, last, a) {
  this.firstname = first;
  this.lastname = last;
  this.age = a;

  this.puraName = function () {
    console.log(this.firstname + " " + this.lastname);
  };
}

let person1 = new person("susheel", "Vishwakarma", 22);
let person2 = new person("vartika", "Bhujbal", 22);

console.log(person1);
console.log(person1.puraName());
console.log(person2);
console.log(person2.puraName());
