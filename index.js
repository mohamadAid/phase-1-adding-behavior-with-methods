// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Create instances of the classes
  const fluffyCat = new Cat('Fluffy', 'female');
  const maxDog = new Dog('Max', 'male');
  const pollyBird = new Bird('Polly', 'female');
  const charlieBird = new Bird('Charlie', 'male');
  
  // Test the speak method
  console.log(fluffyCat.speak()); // Output: "Fluffy says meow!"
  console.log(maxDog.speak()); // Output: "Max says woof!"
  console.log(pollyBird.speak()); // Output: "Polly says squawk!"
  console.log(charlieBird.speak()); // Output: "It's me! Charlie, the parrot!"