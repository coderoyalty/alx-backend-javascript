export default function cleanSet(set, startString) {
  const setArray = [...set];
  const array = [];
  setArray.forEach((value) => {
    if (value.startsWith(startString)) {
      const subStrVal = value.substring(startString.length);
      if (subStrVal && subStrVal !== value) {
        array.push(subStrVal);
      }
    }
  });

  return array.join('-');
}
