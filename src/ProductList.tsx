import styled from "styled-components";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
  },
  {
    id: 3,
    name: "Product 3",
    price: 15,
  },
];

interface ProductListProps {
  addToCart: (product: Product) => void;
}

export const ProductList = ({ addToCart }: ProductListProps) => {
  return (
    <ProductListContainer>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .product-item {
    width: 200px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background-color: #f5f5f5;
  }
`;
