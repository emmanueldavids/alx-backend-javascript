/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud'; // Update the import path here

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);
// Output: Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ${newRowID}:`, updatedRow);
// Output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowID);
console.log(`Deleted row id ${newRowID}`);
// Output: Delete row id 125
