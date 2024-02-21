class Vehicle {
  constructor(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }

  accelerate() {
    this.speed++;
  }

  brake() {
    this.speed--;
  }

  refuel() {
    console.log(`Refueling the ${this.brand} ${this.model}...`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, speed, fuelType, numberOfWheels) {
    super(brand, model, speed, fuelType); // Call the parent constructor
    this.numberOfWheels = numberOfWheels;
  }

  honk() {
    console.log("Beep beep!");
  }
}

// Create a Car object
let car = new Car("Tesla", "Model S", 0, "electric", 4);

// Test the methods
console.log("Initial car state:", car);
car.accelerate();
car.accelerate();
car.brake();
car.refuel();
car.honk();

// Output:
// Initial car state: { brand: 'Tesla', model: 'Model S', speed: 2, fuelType: 'electric', numberOfWheels: 4 }
// Refueling the Tesla Model S...
// Beep beep!
