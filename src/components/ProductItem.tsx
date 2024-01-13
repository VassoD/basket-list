import React from "react";
import styled from "styled-components";
import { Product } from "../types/Product";

interface ProductProps {
  product: Product;
  addToCart: (product: any) => void;
}

/**
 * Renders a product item component.
 *
 * @param {ProductProps} product - The product object.
 * @param {Function} addToCart - The function to add a product to the cart.
 * @return {JSX.Element} The rendered product item component.
 */
export const ProductItem = ({ product, addToCart }: ProductProps) => {
  return (
    <ProductContainer>
      <img src={product.image} alt={product.title} />
      <ProductInfo>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </ProductInfo>
    </ProductContainer>
  );
};

export const ProductContainer = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  align-items: center;

  img {
    width: 10rem;
    height: auto;
    border-radius: 5px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    max-width: max-content;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
  }

  p {
    max-width: 30rem;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
