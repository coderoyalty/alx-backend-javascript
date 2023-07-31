export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const newArr = arr.map((value) => value.id);

  return newArr;
}
