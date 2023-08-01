export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  const dataview = new DataView(buffer);
  int8Array[position] = value;

  return dataview;
}
