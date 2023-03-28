const express = require("express");
const cors = require("cors");

const { getProducts, updateProduct, getProductById, createProduct, deleteProduct } = require("./src/product/controller");
const { login } = require("./src/auth/controller");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(__dirname + '/src/assets/images/'));

app.post("/login", login);

app.get("/product", getProducts);

app.get("/product/:id", getProductById);

app.put("/product/:id", updateProduct);

app.post("/product", createProduct);

app.delete("/product/:id", deleteProduct)

app.listen(PORT, () => {
  console.log(`Server started on PORT = ${PORT}`);
});
