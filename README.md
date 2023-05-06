# Ignite Shop

<div align="center">
  <img width="700" src="">
</div>

## Sobre o Next.js

O Next.js permite que você crie aplicativos da Web de pilha completa, estendendo os recursos mais recentes do React e integrando poderosas ferramentas JavaScript baseadas em Rust para compilações mais rápidas. Podemos trabalhar nele com aplicações SSR(Server Side Rendering) e SSG(Static Site Generator).

<div align="center">
  <img width="700" src="https://user-images.githubusercontent.com/86172286/236590290-da36a5ac-59da-4e52-ab0c-85e6a5851562.jpg">
</div>

### SPA - Single Page Application

SPA traz o conceito de uma página única, ou seja, a aplicação web roda em uma página única ela é construída basicamente em HTML, CSS e JavaScript.
Essa mágica acontece porque quando você faz a requisição do ‘website’ no servidor, todo o conteúdo e carregado uma única vez, na primeira vez que a requisição é feita.

Sempre que você alterna entre os "menus" deste site, o navegador não faz uma nova requisição no servidor, apenas alterna entre os conteúdos, essas páginas são carregadas através do JavaScript, sendo assim não é necessário novas requisições ao servidor para renderizar o novo conteúdo; Netflix e gmail são exemplos de ‘websites’ que usam o conceito SPA.

Pelo fato de não ser necessário fazer novas requisições no servidor, é possível interagir com a aplicação sem recarregar a página, trazendo uma melhor experiência para o usuário. 

Como em uma SPA você precisa carregar o JavaScript para então fazer requisições, você acaba não tendo conteúdo para ser indexado por motores de busca. Hoje, já existem maneiras de auxiliar o SEO em aplicações SPA, mas ainda assim, esse é um possível ponto de atenção.

### SSR - Server Side Rendering

SSR é a renderização do lado do servidor, ele mantém as principais vantagens do SPA e corrige um problema ocasionado por ela. Fazendo a renderização de aplicações SPA no servidor, traz ao usuário um carregamento mais eficiente da aplicação, possibilidade de melhorar a performance e corrige o problema com indexação nos motores de busca já que parte do conteúdo e carregado no servidor; Next e Gatsby são exemplos de servidores que podem ser usados com esse objetivo.

### SSG - Static Site Generator

SSG é uma página que não é gerada em tempo de execução de uma aplicação web, diferente das páginas dinâmicas o conteúdo é fixo; SSG é a geração de páginas estáticas. 

Com SSG você pode configurar de quanto em quanto tempo será feita uma nova requisição ao servidor, vejamos um exemplo: imagine um site que recebe poucas alterações(Landing page de sua empresa), ou alterações de tempos em tempos; quando a sua aplicação é requisitada por um cliente(usuário final), não existe a necessidade de regerar a aplicação em tempo de execução já que não houve mudanças no ‘website’, resumindo caso seu site mude apenas a cada 5 dias, a primeira requisição feita ao seu ‘website’ será feita normalmente, e as outras infinitas requisições que forem feitas por infinitos clientes dentro desse intervalo serão buscadas em uma espécie de "cache da sua aplicação no servidor".

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
