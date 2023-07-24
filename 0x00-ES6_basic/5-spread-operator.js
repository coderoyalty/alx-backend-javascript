export default function concatArrays(array1, array2, string) {
  const spreads = [...array1, ...array2, ...string];
  return spreads;
}
