const express = require("express");
const cors = require("cors");

const { getProducts, updateProduct, getProductById, createProduct, deleteProduct } = require("./src/product/controller");
const { login } = require("./src/auth/controller");
const { authGuard } = require("./src/middleware/auth.middleware");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(__dirname + '/src/assets/images/'));

app.post("/login", login);

app.get("/product", authGuard, getProducts);

app.get("/product/:id", authGuard, getProductById);

app.put("/product/:id", authGuard, updateProduct);

app.post("/product", authGuard, createProduct);

app.delete("/product/:id", authGuard, deleteProduct)

app.listen(PORT, () => {
  console.log(`Server started on PORT = ${PORT}`);
});
