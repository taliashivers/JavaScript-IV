// CODE here for your Lambda Classes
class Person {
    constructor(personOptions) {
      this.name = personOptions.name;
      this.age = personOptions.age;
      this.location = personOptions.location;
      this.gender = personOptions.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  }
  class Instructor extends Person {
    constructor(instructorOptions) {
      super(instructorOptions);
      this.specialty = instructorOptions.specialty;
      this.favLanguage = instructorOptions.favLanguage;
      this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo (subject){
      return `Today we are learning about ${subject}.`;
    }
    grade (student, subject){
      return `${student.name} receives a perfect score on ${subject}`;
    }
    teach(student){
      if (student.grade >= 70){
        return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
      }
      else {
        while (student.grade < 70){
          student.grade = Math.floor(Math.random() * 100) + 1;
          if (student.grade >= 70){
            return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
          }
          console.log(`${student.name}'s new grade is ${student.grade}`)
        }
      }
    }
  }
  class Student extends Person {
    constructor(studentOptions) {
      super(studentOptions);
      this.previousBackground = studentOptions.previousBackground;
      this.className = studentOptions.className;
      this.favSubjects = studentOptions.favSubjects;
      this.grade = Math.floor(Math.random() * 100) + 1;  //stretch goal 
    }
    listsSubjects(){
      for (var i = 1; i < 4; i++){
        return(this.favSubjects[`subject${i}`]);
      }
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
      return `${this.name} has began sprint challenge on ${subject}`;
    }
  }
  class ProjectManager extends Instructor{
    constructor(projectManagerOptions) {
      super(projectManagerOptions);
      this.gradClassName = projectManagerOptions.gradClassName;
      this.favInstructor = projectManagerOptions.favInstructor;
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}'`;
    }
  }
  var personTest = new Person ({
    name: "Talia Shivers",
    age: "24",
    location: "Colorado",
    gender: "Female"
  });
  var instructorTest = new Instructor({
    name: "Cam Pope",
    age: "25",
    location: "USA",
    gender: "Male",
    specialty: "Front-end",
    favLanguage: "Ruby",
    catchPhrase: "Hang on, let me look again."
  });
  var studentTest = new Student ({
    name: "Talia Shivers",
    age: "24",
    location: "Colorado Springs",
    gender: "Female",
    previousBackground: "College graduate",
    className: "webpt4",
    favSubjects: {
      subject1: "HTML",
      subject2: "CSS",
      subject3: "JavaScript"
    }
  });
  var projectManagerTest = new ProjectManager({
    name: "Carlos Lantigua",
    age: "25",
    location: "USA",
    gender: "Male",
    specialty: "JavaScript",
    favLanguage: "C++",
    catchPhrase: "LEEEETTTSSSS GOOOOOOOOO!",
    gradClassName: "FTWEB1",
    favInstructor: "Self"
  });
  //function tests
  console.log(personTest.speak());
  console.log(instructorTest.demo("JavaScript classes"));
  console.log(instructorTest.grade(studentTest,"Javascript."));
  console.log(studentTest.listsSubjects());
  console.log(studentTest.PRAssignment("John Doe"));
  console.log(studentTest.sprintChallenge("Classes"));
  console.log(projectManagerTest.standUp("WebPT4"));
  console.log(projectManagerTest.debugsCode(studentTest, "CSS"));