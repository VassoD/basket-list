import styled from "styled-components";
import { Product } from "../types/Product";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

interface CartProps {
  items: Product[];
  removeFromCart: (productId: number) => void;
}

/**
 * Renders the shopping cart component.
 *
 * @param {CartProps} cart - The array of cart items (the products).
 * @param {function} removeFromCart - The function to remove an item from the cart.
 * @return {JSX.Element} The rendered cart component.
 */
export const Cart = ({ items, removeFromCart }: CartProps) => {
  return (
    <CartContainer>
      <h2>Cart</h2>
      <ItemContainer>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No products yet...</p>
        )}
        <TotalPrice> Total: ${calculateTotalPrice(items)}</TotalPrice>
      </ItemContainer>
    </CartContainer>
  );
};

const TotalPrice = styled.div`
  font-weight: bold;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  align-items: center;
  gap: 2rem;

  img {
    width: 10rem;
    height: auto;
    border-radius: 5px;
  }

  button {
    background-color: red;
    color: white;
    padding: 8px 16px;
    max-width: max-content;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
  }

  p {
    font-size: 0.75rem;
    max-width: 30rem;
  }
`;
