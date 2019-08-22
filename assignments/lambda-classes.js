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

class ProjectManager extends Instructor {
	constructor(name, age, location, specialty, faveLanguage, catchPhrase, gradClassName, favInstructor){
		super(name, age, location, specialty, faveLanguage, catchPhrase)
		this.gradClassName = gradClassName;
		this.favInstructor = favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
	}
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
  name: 'Bob',
  location: 'Kaduna',
  age: 25,
  favLanguage: 'Kotlin',
  specialty: 'Mobile',
  catchPhrase: `I see you see me`
});

const mk = new ProjectManager({
	name: 'Emkay',
  location: 'Nigeria',
  age: 23,
  favLanguage: 'Kotlin',
  specialty: 'Mobile',
	catchPhrase: `Say, what?`,
	gradClassName: 'WEBEU2',
	favInstructor: 'Gabe',
})

const sherif = new ProjectManager({
	name: 'Sherif',
  location: 'Nigeria',
  age: 23,
  favLanguage: 'TypeScript',
  specialty: 'Front-End',
	catchPhrase: `TF, bro?`,
	gradClassName: 'UX2',
	favInstructor: 'Ellen',
})