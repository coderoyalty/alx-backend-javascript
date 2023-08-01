export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(buffer);
    int8Array[position] = value;

    return buffer;
  } catch (err) {
    throw Error('Position outside range');
  }
}
