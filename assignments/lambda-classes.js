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


class Student extends Person {
	constructor(name, age, location, previousBackground, className, favSubjects){
		super(name, age, location);
		this.previousBackground = previousBackground;
		this.className = className;
		this.favSubjects = favSubjects;
	}

	listsSubjects(){
		this.favSubjects.array.forEach(element => console.log(element));
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}
}