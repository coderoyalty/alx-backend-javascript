export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const setArray = [...set];
  const array = [];
  setArray.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStrVal = value.substring(startString.length);
      if (subStrVal && subStrVal !== value) {
        array.push(subStrVal);
      }
    }
  });

  return array.join('-');
}
