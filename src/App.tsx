import React, { useState } from "react";
import "./App.css";
import { Cart } from "./Cart";
import { Product, ProductList } from "./ProductList";

function App() {
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState<Product[]>([]);

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
  };

  //add to cart, new id is being added in the list
  // const addToCart = (product: Product) => {
  //   setCart((prev) => [...prev, product]);
  // };
  //add to cart, same id but quantity is being added
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <button onClick={handleCartClick}>
        {showCart ? "Close Cart" : "Open Cart"}
      </button>

      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}

      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;
