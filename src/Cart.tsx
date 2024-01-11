import styled from "styled-components";
import { Product } from "./ProductList";

interface CartProps {
  cart: Product[];
  removeFromCart: (productId: number) => void;
}

export const Cart = ({ cart, removeFromCart }: CartProps) => {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <Container>
      <h1>Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div> Total: ${totalPrice}</div>
    </Container>
  );
};

const Container = styled.div`
  .cart-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .cart-item {
    width: 200px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
  }
`;
