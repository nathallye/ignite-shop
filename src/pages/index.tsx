import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";

import { HomeContainer, Product } from "../styles/pages/home";
import { Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
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
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            // O Link não faz refresh na página, seguindo o conceito de SPA
            // O Next já deixa pré carregado todos os Link's que encontra em tela, o que pode gerar muitas requisições a depender da quantidade de Link's em tela 
            // prefetch{false} desativa esse comportamento padrão
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}> 
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button>
                    <Handbag size={20} color="#FFFFFF" />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
};

export default Home;

/*
export const getServerSideProps: GetServerSideProps = async () => {
  // o next não devolve nada para o front end antes que tudo esteja carregado (principio de aplicações SSR)
  // o código que colocarmos aqui dentro não ficar visível para o usuário final, desse modo, podemos colocar código sensível (código de autenticaçao, de banco de dados...)

  const response = await stripe.products.list({
    expand: ["data.default_price"] // acessando a tabela relacionada a tabela de products - default_price
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
*/

export const getStaticProps: GetStaticProps = async () => { // roda somente no momento que next criar a versão de cache da página (na build) - SSG
  // aqui dentro não temos acesso ao contexto da aplicação (usuário logado por exemplo)
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", { // vamos formatar o price aqui dentro porque essa requisão vai ser feita a cada duas horas, economizando processamento
        style: "currency",
        currency: "BRL"
      }).format(price.unit_amount / 100)
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // essa página será recriada a cada 2 horas
  };
};