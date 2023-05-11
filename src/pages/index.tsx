import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/shirt-1.png";
import shirt2 from "../assets/shirts/shirt-2.png";
import shirt3 from "../assets/shirts/shirt-3.png";

const Home = () => {
  return (
    <HomeContainer>
      <Product>
        <Image alt="" src={shirt1} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image alt="" src={shirt2} width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export default Home;
