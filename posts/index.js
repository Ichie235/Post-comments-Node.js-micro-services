const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title,content } = req.body;

  posts[id] = {
    id,
    title,
    content
  };
console.log(posts)
  res.status(201).send(posts[id]);
});

app.listen(5000, () => {
  console.log('Listening on 5000');
});
