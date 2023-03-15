const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    user: "admin",
    password: "123"
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
