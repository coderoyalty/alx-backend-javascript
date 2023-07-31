export default function getStudentIdsSum(students) {
  const totalSum = students.reduce((sum, current) => sum + current.id, 0);
  return totalSum;
}
