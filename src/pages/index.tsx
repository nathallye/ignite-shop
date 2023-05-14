import Image from "next/image";
import Stripe from "stripe";
import { GetServerSideProps } from "next";
import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";

import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/shirt-1.png";
import shirt2 from "../assets/shirts/shirt-2.png";
import shirt3 from "../assets/shirts/shirt-3.png";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

const Home = ({ products }: HomeProps) => {
  const [sliderRef] = useKeenSlider({
    // ref é uma funcionalidade do React, que nos permite ter acesso a uma referência de um elemento na DOM - Conseguimos modificar o funcionamento desse elemento e estilização diretamente pelo JS/TS (igual document.getElementById)
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // o next não devolve nada para o front end antes que tudo esteja carregado (principio de aplicações SSR)
  // o código que colocarmos aqui dentro não ficar visível para o usuário final, desse modo, podemos colocar código sensível (código de autenticaçao, de banco de dados...)

  const response = await stripe.products.list({
    expand: ["data.default_price"] // acessando a tabela de relacionada a tabela de products - default_price
  });

  // console.log(response.data); // só aparece no console do node(terminal)

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100
    };
  });

  return {
    props: {
      products
    }
  };
};
