import { AppProps } from "next/app";
import Image from "next/image";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  );
}

export default App;