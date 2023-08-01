export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsAtCity = students.filter((student) => student.location === city);
  const result = studentsAtCity.map((student) => {
    const correspondingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: correspondingGrade ? correspondingGrade.grade : 'N/A',
    };
  });
  return result;
}
