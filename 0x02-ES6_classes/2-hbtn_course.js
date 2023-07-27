/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be string');
    if (typeof length !== 'number') throw TypeError('Length must be number');
    if (Array.isArray(students) !== true) throw TypeError('Students must be array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be string');
    this._name = value;
  }

  get length() {
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') throw TypeError('Length must be number');
    this._name = value;
  }

  get students() {
    return this._name;
  }

  set students(value) {
    if (Array.isArray(value) !== true) throw TypeError('Students must be array');
    this._name = value;
  }
}
