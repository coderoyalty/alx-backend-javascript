export default function createIteratorObject(report) {
  const iterable = [];
  if (report) {
    for (const key in report) {
      // eslint-disable-next-line no-prototype-builtins
      if (report.hasOwnProperty(key)) {
        const value = report[key];
        iterable.push(...value);
      }
    }
  }
  return iterable;
}
