# Ignite Shop

## Criando um projeto com Next.js

- Dentro da pasta do projeto, vamos rodar o comando(mais recomendado atualmente usar o npx):

```
> npx create-next-app@latest
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-next-app:** Dependência para criar um projeto.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
> cd ignite-shop
     [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
> npm run dev
```

### Configurações do projeto

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
.next
node_modules
public
pages
styles
```

Vamos **criar uma pasta src na raiz do projeto**.
E **mover as pastas pages e styles para dentro de src**

- Agora, vamos parar a aplicação

```
> ctrl + c
```

- E rodar novamente, para que a página seja recarregada:

```
> npm run dev
```

- Vamos criar também a pasta `components` dentro de `src`;

### Criando rotas da aplicação

Agora vamos entender sobre o roteamento do NextJS, como podemos utilizar o sistema de arquivos para criar rotas a partir do nome dos nossos arquivos no NextJS.

- Para isso, dentro de `src/pages` vamos criar um arquivo com o nome da nossa rota(product e Success) que vai poder ser acessada através de `localhost:3000/[nome-arquivo]`. E o conteúdo desse arquivo será um componente:

``` TSX
import React from "react";

const Product = () => {
  return <h1>Product</h1>;
};

export default Product;
```

- Se quisermos receber parâmetros nessa url, podemos criar uma pasta com o nome do arquivo(product e Success) e adicionar `[nome-parâmetro]` no nome do arquivo tsx(ex.: `src/pages/product/[id].tsx`).

### Configurando documento HTML

- No Next não temos um arquivo chamado `index.html`, as configurações de carregamento de fontes do nosso app são colocadas dentro do arquivo `_document.tsx`. Como é feito a seguir:

``` TSX
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript /> {/* Essa TAG indica o local onde iremos carregar o script da aplicação*/}
      </body>
    </Html>
  );
}

export default Document;
```

### Configurando Stitches

Ferramenta CSS-in-JS com foco em performance e experiencia de desenvolvimento que utilizaremos para estilizar a nossa aplicação.

- Para configurar Stitches, iremos criar um arquivo ``styles/index.ts`` (`.js` funciona também) e importar a função `createStitches`.

``` TS
import { createStitches } from "@stitches/react";
```

Esta função recebe um objeto de configuração:

- `theme`: defina seu tema de design , que mapeia para as propriedades CSS.
- `media`: Definir pontos de interrupção responsivos reutilizáveis .
- `utils`: crie utilitários personalizados para melhorar sua experiência de desenvolvedor.
- `prefix`: Prefixe nomes de classe e variáveis ​​CSS para evitar conflitos.
- `themeMap`: Defina o mapeamento personalizado de propriedades CSS para tokens de tema.

E retorna todas as funções disponíveis acima:

``` TSX
import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6',
    }
  }
});
```

- Deste ponto em diante, iremos importar `styled` e outras funções do arquivo `styles/index.ts`(mas como não precisa especificar o index.ts - vamos importar direto da pasta styles):

``` TSX
import { styled } from "../styles";

const Button = styled("button", {
  display: "flex",
  
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,

  gap: "0.5rem",
  padding: "4px 8px",

  span: {
    fontWeight: "bold"
  },

  "&:hover": {
    filter: "brightness(0.8)"
  }
});

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  );
}
```