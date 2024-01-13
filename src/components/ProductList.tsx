import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../types/Product";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const API_URL = "https://fakestoreapi.com";

/**
 * Renders a list of products and allows users to add them to the cart.
 *
 * @param {ProductListProps} addToCart - A function to add a product to the cart.
 * @return {JSX.Element} The rendered product list component.
 */
export const ProductList = ({ addToCart }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch all products
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ProductListContainer>
      <h2>Product List</h2>
      <ProductItemContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ProductItemContainer>
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
