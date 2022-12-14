import styled from "styled-components";

import ProductCard from "./ProductCard";
import { shopData } from "./ShopData";

const Products = () => {
  return (
    <>
      <Title>Welcome to DC Clothing Shop</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
