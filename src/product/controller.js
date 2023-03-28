let products = [
  {
    id: 1,
    category: "PC",
    name: "Lenovo Y50-70",
    image: "http://localhost:3000/images/lenovo-laptop-y50.png",
    quantity: 5,
    price: "25,000.00",
    description: `15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 x 1080)\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків.`,
  },
  {
    id: 2,
    category: "Clothes",
    name: "Nike M Nk Df Acd21",
    image: "http://localhost:3000/images/sport-pants.jpg",
    quantity: 22,
    price: "4,000.00",
    description: `Чоловічі спортивні штани від Nike відшиті з бавовни з додаванням поліестеру. Модель з м'якої тканини відмінно підійде для повсякденного носіння та активного відпочинку.`,
  },
  {
    id: 3,
    category: "Plumbing",
    name: "CERSANIT MITO 17",
    image: "http://localhost:3000/images/bath.jpg",
    quantity: 1337,
    price: "5,000.00",
    description: `Ванни Cersanit — це завжди найсміливіші дизайнерські рішення і водночас зручність і комфорт. Акрилові ванни вирізняються незвичайними формами та кольоровою гамою, не темніють згодом. Акрил сприяє тому, що бактерії не розмножуються, тому ванни з цього матеріалу набагато гігієнічніші сталевих або чавунних. Ванни мають невелику вагу, тому їх легко постачати та монтувати. Вода в такій ванні остигає дуже повільно, завдяки високим теплоощадним характеристикам акрилу. Догляд за ванною простий, її необхідно тільки прополоскати водою або протерти губкою з рідким мийним засобом (абразивні — можуть пошкодити поверхню). Якщо все-таки подряпин у процесі експлуатації уникнути не вдалося, їх легко заполірувати.`,
  },
];

exports.getProducts = (req, res) => {
  return res.json(products);
};

exports.getProductById = (req, res) => {
  const productId = Number(req.params.id);

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "PRODUCT_NOT_FOUND",
    });
  }

  return res.json(product);
};

exports.updateProduct = (req, res) => {
  const productId = Number(req.params.id);
  const productData = req.body;

  products = products.map((product) => {
    if (productId === product.id) {
      Object.assign(product, productData);
    }

    return product;
  });

  return res.json(products);
};

exports.createProduct = (req, res) => {
  const product = {
    ...req.body,
    id: products[products.length - 1].id + 1,
  };

  products.push(product);

  res.json(products);
};

exports.deleteProduct = (req, res) => {
  const productId = Number(req.params.id);

  const productIndex = products.findIndex((product) => product.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({
      message: "PRODUCT_NOT_FOUND",
    });
  }
  products.splice(productIndex, 1);
  res.json(products);
};
