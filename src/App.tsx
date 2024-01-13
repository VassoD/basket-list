import React, { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import styled from "styled-components";
import { ProductList } from "./components/ProductList";
import { Product } from "./types/Product";
function App() {
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState<Product[]>([]);

  const handleCartClick = () => {
    setShowCart((prev) => !prev);
  };

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
      <CartButton onClick={handleCartClick}>
        {showCart ? "Close Cart" : "Open Cart"}
      </CartButton>
      {showCart && <Cart items={cart} removeFromCart={removeFromCart} />}
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default App;

const CartButton = styled.button`
  background-color: lightgray;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 2px lightgray;
`;
