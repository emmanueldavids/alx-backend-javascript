// Define the interface for Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  //create two Students
  // Create student1
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  //create Student2
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Using Vanilla JavaScript, render a table and append a new row for each element in the array
  const table = document.createElement("table");
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  // Append the table to the body of the document
  document.body.appendChild(table);
