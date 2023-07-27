/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](primitiveType) {
    if (primitiveType === 'number') {
      return this._size;
    }
    if (primitiveType === 'string') {
      return this._location;
    }
    return this;
  }
}
