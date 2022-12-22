export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get propName(){
    return this._name;
  }

  set propName(name) {
    this._name = name;
  }

  get propLength(){
    return this._length;
  }

  set propLength(length){
    this._length = length
  }

  get propStudents() {
    return this._students
  }

  set propStudents(students) {
    this._students = students
  }
}
