export class Subject {
    private _teacher?: Subjects.Teacher;
  
    setTeacher(teacher: Subjects.Teacher): void {
      this._teacher = teacher;
    }
  
    get teacher(): Subjects.Teacher | undefined {
      return this._teacher;
    }
  }
  