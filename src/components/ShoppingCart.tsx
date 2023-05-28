import React from "react";
import Image from "next/image";
import { X } from "phosphor-react";

import shirt1 from "../assets/shirts/shirt-1.png";

import {
  ImageContainer,
  ShoppingCartContainer,
  CartItems,
  InfosItem,
  ItemContainer,
  Resume,
  ButtonBuy,
} from "../styles/components/ShoppingCart";

export const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <button>
        <X size={20} color="#c4c4cc" />
      </button>
      
      <h2>Sacola de compras</h2>

      <CartItems>
        <ItemContainer>
          <ImageContainer>
            <Image src={shirt1} alt="" width={94} height={94} />
          </ImageContainer>
          <InfosItem>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
            <button>Remover</button>
          </InfosItem>
        </ItemContainer>

        <ItemContainer>
          <ImageContainer>
            <Image src={shirt1} alt="" width={94} height={94} />
          </ImageContainer>
          <InfosItem>
            <h3>Camiseta Beyond the Limits</h3>
            <span>R$ 79,90</span>
            <button>Remover</button>
          </InfosItem>
        </ItemContainer>
      </CartItems>

      <Resume>
        <div>
          <h3>Quantidade</h3>
          <span>3 itens</span>
        </div>
        <div>
          <h3>Valor total</h3>
          <span>R$ 270,00</span>
        </div>
      </Resume>

      <ButtonBuy>Finalizar compra</ButtonBuy>
    </ShoppingCartContainer>
  );
};
