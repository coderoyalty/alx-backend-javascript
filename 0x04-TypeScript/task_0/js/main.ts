export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "David",
  lastName: "De Gea",
  age: 27,
  location: "Manchester, UK"
}

const student2: Student = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 35,
  location: "Miami, US"
}

const studentsList: Student[] = [
  student1, student2
]

document.title = "Task 0"

export function renderStudents(students: Student[]) {
  const table = document.createElement('table');
  const head = document.createElement('thead');
  const row = document.createElement('tr');
  const body = document.createElement('tbody');
  row.insertAdjacentHTML("beforeend", "<td>FirstName</td>");
  row.insertAdjacentHTML("beforeend", "<td>Location</td>");
  head.insertAdjacentElement("beforeend", row);

  for (const student of students) {
    const row = document.createElement("tr");
    row.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    row.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    body.insertAdjacentElement("beforeend", row);
  }

  table.insertAdjacentElement("beforeend", head);
  table.insertAdjacentElement("beforeend", body);
  document.body.insertAdjacentElement("beforeend", table);
}

renderStudents(studentsList);
