const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

// app.use((req, res) => {
//   res.send(`<h1>You've hit a dead end</h1>`);
// });

app.use(express.urlencoded({ extended: true })); //Post request decodes here

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/params/:name/:place`, (req, res) => {
  //   console.log(req.params);
  res.send(`<h2>I'm ${req.params.name} and I'm from ${req.params.place}</h2>`);
});

app.get(`/query`, (req, res) => {
  res.send(`<h1>${req.query.actor} worked in ${req.query.movie}</h1>`);
  //   console.log(req.query);
});

app.get(`/body`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `static`, `index.html`));
});

app.post(`/body`, (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
