// CODE here for your Lambda Classes
class Person {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
	}
	
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
	}
}

class Instructor extends Person {
	constructor(object) {
		super(object);
		this.specialty = object.specialty;
		this.faveLanguage = object.faveLanguage;
		this.catchPhrase = object.catchPhrase;
	}

	demo(subject){
		console.log(`Today we are learning about ${subject}`)
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}
}


class Student extends Person {
	constructor(object){
		super(object);
		this.previousBackground = object.previousBackground;
		this.className = object.className;
		this.favSubjects = object.favSubjects;
		this.grade =  Math.floor(Math.random() * (100 - 0)) + 0; 
	}

	listsSubjects(){
		this.favSubjects.forEach(element => console.log(element));
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}
}

class ProjectManager extends Instructor {
	constructor(object){
		super(object)
		this.gradClassName = object.gradClassName;
		this.favInstructor = object.favInstructor;
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

const James = new Person({
	name: 'James',
  location: 'UK',
  age: 40,
})

const kiyani = new Person({
	name: 'Kiyani',
  location: 'Ivory Coast',
  age: 21,
})

const dani = new Student({
	name: 'Danika',
  location: 'UK',
	age: 'har-har',
	previousBackground: 'someBackground',
	className: 'WEBEU3',
	favSubjects: ['JavaScript', 'HTML', 'CSS', 'LESS']
})

const richany = new Student({
	name: 'Richany',
  location: 'SomePlace',
	age: 'someAge',
	previousBackground: 'someBackground',
	className: 'WEBEU3',
	favSubjects: ['LESS', 'Repl.it', 'LESS', 'CSS', 'codeWAAAARS!!!!']
})

fred.demo('JavaScript')
bob.demo('UX')

fred.grade(richany, 'JavaScript')

bob.grade(dani, 'Repl.it')

James.speak();

kiyani.speak();

mk.standUp('WebEU3_Isaac');

sherif.standUp('WebEU3');

mk.debugsCode(richany, 'JavaScript')

sherif.debugsCode(dani, 'Kotlin')

richany.listsSubjects();
richany.PRAssignment('Java')
richany.sprintChallenge('Android')

dani.listsSubjects();
dani.PRAssignment('Kotlin')
dani.sprintChallenge('Figma')