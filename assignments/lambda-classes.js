// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
	}
	
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
	}
}

class Instructor extends Person {
	constructor(name, age, location, specialty, faveLanguage, catchPhrase) {
		super(name, age, location);
		this.specialty = specialty;
		this.faveLanguage = faveLanguage;
		this.catchPhrase = catchPhrase;
	}

	demo(subject){
		console.log(`Today we are learning about ${subject}`)
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}
}
