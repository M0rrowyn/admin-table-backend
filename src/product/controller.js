const products = [
  {
    id: 1,
    category: "PC",
    name: "Lenovo Y50-70",
    quantity: 5,
    price: "25,000.00",
  },
  {
    id: 2,
    category: "Clothes",
    name: "Nike M Nk Df Acd21",
    quantity: 22,
    price: "4,000.00",
  },
  {
    id: 3,
    category: "Plumbing",
    name: "CERSANIT MITO 17",
    quantity: 1337,
    price: "5,000.00",
  },
];

exports.getProducts = (req, res) => {
  res.json(products);
};
