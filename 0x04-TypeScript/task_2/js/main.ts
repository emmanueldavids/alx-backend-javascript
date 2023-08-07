// DirectorInterface interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test cases
const employee1 = createEmployee(200);
console.log(employee1.constructor); // Output: Teacher

const employee2 = createEmployee(1000);
console.log(employee2.constructor); // Output: Director

const employee3 = createEmployee("$500");
console.log(employee3.constructor); // Output: Director

// Type predicate function isDirector to check if an employee is a Director
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function executeWork to call the appropriate task method based on the employee type
function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// Define the String literal type named Subjects
type Subjects = 'Math' | 'History';

// Function teachClass to handle different class subjects
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // In case there are other subjects, handle it accordingly
    return 'Teaching Some Other Subject';
  }
}

// Test cases
const classToday1: Subjects = 'Math';
const classToday2: Subjects = 'History';
const classToday3: Subjects = 'English'; // Some other subject

console.log(teachClass(classToday1)); // Output: Teaching Math
console.log(teachClass(classToday2)); // Output: Teaching History
console.log(teachClass(classToday3)); // Output: Teaching Some Other Subject

