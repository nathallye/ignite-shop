import React from "react";
import Link from "next/link";

import { SuccessContainer } from "../../styles/pages/success";
import { ImageContainer } from "../../styles/pages/success";

const Success = () => {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
};

export default Success;
