const express = require('express');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const report = [];

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

      report.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(groups)) {
        const allFirstNames = group.map((item) => item.firstname);
        const names = allFirstNames.join(', ');
        report.push(`Number of students in ${field}: ${group.length}. List: ${names}`);
      }
      resolve(report);
    }
  });
});

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const response = 'Hello Holberton School!';
      res.send(response);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      countStudents(DB_FILE).then((report) => {
        const strReport = report.join('\n');
        const response = `This is the list of our students\n${strReport}`;
        return res.send(response);
      }).catch((error) => {
        const response = `This is the list of our students\n${error.message}`;
        return res.send(response);
      });
    },
  },
];

const app = express();

function run() {
  for (const handler of ROUTE_HANDLERS) {
    app.get(handler.route, handler.handler);
  }

  app.listen(1245);
}

run();
module.exports = app;
