//Interface for the the Directors
interface Directors extends Teacher {
  numberOfReports: number;
}
//interface for the printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//Techers Interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedName = `${firstLetter}. ${lastName}`;
  return formattedName;
}

// Test example
const result: string = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
