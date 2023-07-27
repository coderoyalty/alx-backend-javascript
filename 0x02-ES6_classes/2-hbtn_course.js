/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be string');
    this._name = value;
  }

  get length() {
    return this.length;
  }

  set length(value) {
    if (typeof value !== 'number') throw new TypeError('Length must be number');
    this.length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) throw new TypeError('Students must be an array of strings');
    if (value.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this.students = value;
  }
}
