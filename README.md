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

## Configurações do projeto

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
