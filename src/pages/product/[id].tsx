import React from "react";
import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

const Product = () => {
  const { query } = useRouter();

  return (
    // <h1>Product {JSON.stringify(query)}</h1>
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          aliquid rerum exercitationem facere a molestiae ut sed velit non
          mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed
          laboriosam tempora?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
