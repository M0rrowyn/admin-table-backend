const express = require("express");
const cors = require("cors");

const { getProducts } = require("./src/product/controller");
const { login } = require("./src/auth/controller");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/login", login);

app.get("/product", getProducts);

app.listen(PORT, () => {
  console.log(`Server started on PORT = ${PORT}`);
});
