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
class Persons {
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

const emkay = new Persons("Maaruf", 23);

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
class Baby extends Persons {
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
class Students {
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
  
  
  
  var Usman = new Students('Usman', 24, '131869', 'M');

// =====STRETCH CHALLENGE=======
/*
function GameObject(test){
  this.createdAt = test.createdAt;
  this.name = test.name;
  this.dimensions = test.dimensions;
}

GameObject.prototype.destroy = function () { return `${this.name} was removed from the game` }

function CharacterStats(test){
  GameObject.call(this, test);
  this.healthPoints = test.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () { return `${this.name} took damage.`}

function Humanoid(test) {
  CharacterStats.call(this, test);
  this.team = test.team;
  this.weapons = test.weapons;
  this.language = test.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () { return `${this.name} offers a greeting in ${this.language}.`}
 */
class GameObject {
    constructor(test) {
        this.createdAt = test.createdAt;
        this.name = test.name;
        this.dimensions = test.dimensions;
    }
    destroy() { return `${this.name} was removed from the game`; }
}
  
  
class CharacterStats extends GameObject {
    constructor(test) {
        super(test)
        this.healthPoints = test.healthPoints;
    }
    takeDamage() { return `${this.name} took damage.`; }
}
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
class Humanoid extends CharacterStats {
    constructor(test) {
        super(test)
        this.team = test.team;
        this.weapons = test.weapons;
        this.language = test.language;
    }
    greet() { return `${this.name} offers a greeting in ${this.language}.`; }
}
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
