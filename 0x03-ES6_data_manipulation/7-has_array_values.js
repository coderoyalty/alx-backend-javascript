export default function hasValuesFromArray(set, array) {
  const rv = array.every((value) => set.has(value));
  return rv;
}
