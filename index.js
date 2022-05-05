const express = require('express');
const app = express(),
  testJson = require('./test/test.json');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('index', { name: 'data' });
});

app.get('/param/:email', (req, res) => {
  testJson.license = req.params.email;
  testJson.keywords = req.query.qr;
  res.json(testJson);
});

const server = app.listen(3000, () => {
  console.log('Server is running (localhost: 3000)');
});
