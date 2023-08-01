export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(buffer);
    const dataView = new DataView(buffer);
    int8Array[position] = value;

    return dataView;
  } catch (err) {
    throw Error('Position outside range');
  }
}
