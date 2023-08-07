/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/Java.ts" />
/// <reference path="../js/subjects/React.ts" />

import { Cpp } from './js/subjects/Cpp.ts';
import { Java } from './js/subjects/Java';
import { React } from './js/subjects/React';
import { Teacher } from './js/subjects/Teacher';
import { Subject } from './js/subjects/Subject';

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Log the output for Cpp Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log the output for Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log the output for React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
