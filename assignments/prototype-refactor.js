/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
 function Person(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  Person.prototype.eatEdible = function (stuff) {
    this.stomach.push(stuff);
  }

  Person.prototype.poop = function () {
    this.stomach = [];
  }

  const emkay = new Person('Maaruf', 23);

  console.log(`${emkay.name} is currently ${emkay.age} yo`)
  emkay.eatEdible('Pizza')

  console.log(emkay)

  emkay.poop()

  console.log(emkay)
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eatEdible(stuff) {
    this.stomach.push(stuff);
  }

  poop() {
    this.stomach = [];
  }
}

const emkay = new Person("Maaruf", 23);

console.log(`${emkay.name} is currently ${emkay.age} yo`);
emkay.eatEdible("Pizza");

console.log(emkay);

emkay.poop();

console.log(emkay);
/* 
function Car(model, make){
    this.model = model;
    this.make = make;
    this.odometer = 0;
    this.crashed = false;
  }

  Car.prototype.drive = function (distance) {
    if(this.crashed)
      return `I crashed at ${this.odometer} miles!`
    this.odometer += Number(distance)
    return `Vroom vroom, we at ${this.odometer} miles now, baby!`;
  }

  Car.prototype.crash = function () {
    this.crashed = true;
  }

  Car.prototype.repair = function () { this.crashed = false; }

  var aCar = new Car('YC', 'BMW');
*/

class Car {
  constructor(model, make) {
    this.model = model;
    this.make = make;
    this.odometer = 0;
    this.isCrashed = false;
  }

  drive(distance) {
    if(this.isCrashed)
      return `I crashed at ${this.odometer} miles!`
    this.odometer += Number(distance)
    return `Vroom vroom, we at ${this.odometer} miles now, baby!`;
  }

  crash() {
    this.isCrashed = true;
  }

  repair() { this.isCrashed = false; }
}

var aCar = new Car('YC', 'BMW');
/*
function Baby(name, age) {
    Person.call(this, name, age)
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function () { return `I can play, even though I am ${this.age} years old...`}

  var mine = new Baby('Mine', 2)
 */
class Baby extends Person {
    constructor(name, age) {
        super(name, age);
    }
    play() { return `I can play, even though I am ${this.age} years old...`; }
}



  var mine = new Baby('Mine', 2)
/*
 function Student(name, age, id, gender){
  this.name = name;
  this.age = age;
  this.id = id;
  this.gender = gender;
  this.isAcing = true;
  this.future = 'still bright'
  this.classesSkipped = 0;
}

Student.prototype.skipClass = function (number) {
  this.classesSkipped += Number(number);
  if(this.classesSkipped >= 15) {
    this.isAcing = false;
    this.future = 'really dim right now, SMH';
  }
  else if(this.classesSkipped >= 11) {
    this.isAcing = false;
    this.future = 'currently dim';
  }
    return `You have skipped ${this.classesSkipped} classes and your future is ${this.future}`
}

Student.prototype.turnANewLeaf = function () {
  this.classesSkipped = 0;
  return `Huh... Who knew ${this.name} could ever attend make up classes...`
}

var Usman = new Student('Usman', 24, '131869', 'M'); */
class Student {
    constructor(name, age, id, gender) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
        this.isAcing = true;
        this.future = 'still bright';
        this.classesSkipped = 0;
    }
    skipClass(number) {
        this.classesSkipped += Number(number);
        if (this.classesSkipped >= 15) {
            this.isAcing = false;
            this.future = 'really dim right now, SMH';
        }
        else if (this.classesSkipped >= 11) {
            this.isAcing = false;
            this.future = 'currently dim';
        }
        return `You have skipped ${this.classesSkipped} classes and your future is ${this.future}`;
    }
    turnANewLeaf() {
        this.classesSkipped = 0;
        return `Huh... Who knew ${this.name} could ever attend make up classes...`;
    }
}
  
  
  
  var Usman = new Student('Usman', 24, '131869', 'M');

// =====STRETCH CHALLENGE=======

/*
 */

/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
