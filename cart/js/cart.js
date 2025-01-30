/*
const products = [
{
name: '',
price: 1,

quantity:2,
}
];

const discounts = [
{
discount: 20,
product: {
    name: '',
    price: 1,
    quantity: 2,
}
}
]
*/

const cart = () => {
  // products = [{ name: 'T-shirt', price: 20, quantity: 2 }, { name: 'Cap', price: 5, quantity: 3 }];
  /**
   * Array of product objects in the cart.
   * @type {Product[]}
   */
  let products = [];
  // discounts = [{ product: { name: 'T-shirt', price: 20, quantity: 2 }, discount: 10 }];
  /**
   * Array of discount objects applied to products.
   * @type {Discount[]}
   */
  let discounts = [];

  /**
   * Adds a product to the product list
   * @param {Product} product - The product to add to the product list
   */
  const addToCart = (product) => {
    products = [...products, product];
  };

  /**
   * Gets the list of products in the cart.
   * @returns {Product[]} The list of products in the cart.
   */
  const getCart = () => {
    return products;
  };

  /**
   * Gets the list of discounts applied to the cart.
   * @returns {Discount[]} The list of discounts applied to the cart.
   */
  const getDiscounts = () => {
    return discounts;
  };

  /**
   * Get the total price of the products in the cart.
   * @returns {number} The total price of the products in the cart.
   */
  const getTotal = () => {
    /*  let total = 0;
    for (const product of products) {
      total = total + product.price * product.quantity;
    } */
    /* total = products.reduce(
      (acum, product) => acum + product.price * product.quantity,
      0
    );
    return total; */
    return products.reduce(
      (acum, product) => acum + product.price * product.quantity,
      0
    );
  };

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the product list.
   */
  const applyDiscount = (productName, discount) => {
    const product = products.find(({ name }) => name === productName);
    if (!product) {
      throw new Error("Product not found");
    }
    discounts = [
      ...discounts,
      {
        discount: parseInt(discount), //ojo estamos recibiendo un string
        product: { ...product }, // en ese caso solo hay un nivel por lo que el spread operator nos ayuda
      },
    ];
    // product.price = 2;//Este es un error fatal, estoy sobre escribiendo el listado original
    //mutando su contenido el cual se usa en otros lugares y no debería cambiar
    //esta es la forma correcta
    products = products.map((productElement) => {
      if (productElement.name === productName) {
        //Cuando encuentro el producto al que debo aplicarle el descuento lo aplico
        const discountNumber = parseInt(discount);
        const priceDiscount = productElement.price * (discountNumber / 100);
        const price = (productElement.price = priceDiscount);
        return { ...productElement, price };
      } else {
        return productElement;
      }
    });
    // Usamos map para iterar por los productos y modificar el que nos interesa
    //recordemos que map devuelve un nuevo array y una copia limpia
  };

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {};

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {};

  return {
    addToCart,
    getCart,
    applyDiscount,
    getDiscounts,
    removeDiscount,
    removeProduct,
    getTotal,
  };
};

export default cart;
