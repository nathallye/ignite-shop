import React from "react";
import Image from "next/image";

import { ImageContainer, ItemContainer, ShoppingCartContainer } from "../styles/components/ShoppingCart";

import shirt1 from "../assets/shirts/shirt-1.png";
import { X } from "phosphor-react";

export const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <button>
        <X />
      </button>
      
      <h2>Sacola de compras</h2>
      <ItemContainer>
        <ImageContainer>
          <Image src={shirt1} alt="" width={94} height={94} />
        </ImageContainer>
        <div>
          <h3>Camiseta Beyond the Limits</h3>
          <span>R$ 79,90</span>
          <button>Remover</button>
        </div>
      </ItemContainer>
    </ShoppingCartContainer>
  );
};
