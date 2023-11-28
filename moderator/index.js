const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = ["yelow", "red", "blue"].some(word =>
      data.content.includes(word)
    )
      ? "rejected"
      : "approved";


    await axios.post("http://localhost:5005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(5003, () => {
  console.log("Listening on 5003");
});
