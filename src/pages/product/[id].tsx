import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import axios from "axios";

import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    defaultPriceId: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const buyProductHandler = async () => {
    // console.log(product.defaultPriceId);
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId, // params
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl; // redirecionando para rota externa
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  };

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>
   
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={buyProductHandler}>Comprar</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => { // SSG com parâmetro dinâmico
  return {
    paths: [ // os produtos informados dentro de paths vão ser gerados estaticamente (podem ser aqueles mais acessados, para melhor performance da aplicação)
      {
        params: { id: "prod_NsrAqTZzdGril1" }
      }
    ],
    fallback: "blocking" // fallback vai gerar as páginas com parâmetros dinâmicos que não foram informadas em paths - "blocking" não mostra nada em tela, até ter algo para mostrar
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id; // acessando o id da url

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"] // acessando a tabela de relacionada a tabela de products - default_price
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description, 
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", { // vamos formatar o price aqui dentro porque essa requisão vai ser feita a cada duas horas, economizando processamento
          style: "currency",
          currency: "BRL"
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // essa página será recriada a cada 1 horas
  };
};