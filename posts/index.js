const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title, content } = req.body;

  posts[id] = {
    id,
    title,
    content,
  };

  await axios.post("http://localhost:5005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
      content,
    },
  });

  res.status(201).send(posts[id]);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
