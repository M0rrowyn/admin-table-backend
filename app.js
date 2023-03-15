const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "test";

const app = express();
const user = {
  id: 1,
  login: "admin",
  password: "1234",
  name: "Elen",
  surname: "Kryshtal",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  if (user.login !== req.body.login || user.password !== req.body.password) {
    return res.status(404).json({
      message: "USER_NOT_FOUND",
    });
  }
  const userData = {
    id: user.id,
    name: user.name,
    surname: user.surname,
  };
  const token = generateToken(userData);
  return res.json({
    token, 
    user: userData
  });
});

function generateToken(payload) {
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 3600 });
  return token;
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
