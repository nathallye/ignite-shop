import { AppProps } from "next/app";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
