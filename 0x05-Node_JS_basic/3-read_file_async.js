const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data
        .toString()
        .trim()
        .split('\n');
      const dbFieldNames = lines[0].split(',');
      const propNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      const groups = {};
      for (const line of lines.slice(1)) {
        const record = line.split(',');
        const values = record.slice(0, record.length - 1);

        const field = record[record.length - 1];
        if (!Object.keys(groups).includes(field)) {
          groups[field] = [];
        }

        const entries = propNames.map((prop, idx) => [prop, values[idx]]);
        groups[field].push(Object.fromEntries(entries));
      }

      let totalStudents = 0;

      for (const group of Object.values(groups)) {
        totalStudents += group.length;
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(groups)) {
        const allFirstNames = group.map((item) => item.firstname);
        const names = allFirstNames.join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${names}`);
      }
    }
    resolve(true);
  });
});

module.exports = countStudents;
