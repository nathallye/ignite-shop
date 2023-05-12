import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/shirt-1.png";
import shirt2 from "../assets/shirts/shirt-2.png";
import shirt3 from "../assets/shirts/shirt-3.png";

const Home = (props) => {
  const [sliderRef] = useKeenSlider({ // ref é uma funcionalidade do React, que nos permite ter acesso a uma referência de um elemento na DOM - Conseguimos modificar o funcionamento desse elemento e estilização diretamente pelo JS/TS (igual document.getElementById)
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt1} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt2} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt3} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image alt="" src={shirt2} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

export default Home;


export const getServerSideProps = async () => { // o next não devolve nada para o front end antes que tudo esteja carregado (principio de aplicações SSR)
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log("rodou"); // só aparece no console do node(terminal)

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}
