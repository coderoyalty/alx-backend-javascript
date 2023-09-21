const fs = require('fs');
const http = require('http');

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
    handler(res) {
      const response = 'Hello Holberton School!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', response.length);
      res.write(Buffer.from(response));
    },
  },
  {
    route: '/students',
    handler(res) {
      countStudents(DB_FILE).then((report) => {
        const strReport = report.join('\n');
        const response = `This is the list of our students\n${strReport}`;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', response.length);
        res.write(Buffer.from(response));
      }).catch((error) => {
        const err = `This is the list of our students\n${error.message}`;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', err.length);
        res.write(Buffer.from(err));
      });
    },
  },
];

const app = http.createServer();

app.on('request', (req, res) => {
  for (const handler of ROUTE_HANDLERS) {
    if (req.url === handler.route) {
      handler.handler(res);
      break;
    }
  }
});

app.listen(1245, 'localhost');

module.exports = app;
