import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logoImg from "../assets/logo-ignite-shop.svg";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Header>
        <Link href={"/"}>
          <Image src={logoImg.src} alt="" width={130} height={52} />
        </Link>
      </Header>
      
      <Component {...pageProps} />
    </Container>
  );
}

export default App;