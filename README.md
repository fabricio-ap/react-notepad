# Notepad

- [Sobre o projeto](#sobre-o-projeto)
- [Demonstração](#Demonstração)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Executando o projeto](#executando-o-rojeto)
- [Metodologias](#metodologias)
- [Créditos](#créditos)
- [Licença](#licença)

## Sobre o projeto

O Notepad é um projeto criado com inspiração no Google Keep, que básicamente um bloco de notas.

Ele funciona com a manipulação de anotações em uma fake api, criada com o `json-server`.

O projeto permite que o usuário crie anotações com título, texto e marcadores. Também conta com pesquisa e filtro pelas tags.

Além de uma opção de troca de tema dinâmicamente, utilizando tokens de cores e o localStorage.

## Demonstração

![Writing](/src/assets/image/Screenshot.png)

## Tecnologias utilizadas

O projeto foi construido utilizando React, Typescript e Vite. Para os estilos, foi utilizado Styled-Components e Ant-Design para o Modal.

Para o gerenciamento de requisições, foram utilizados o Axios para as chamadas e o React-Query para gerenciar as funções assíncronas.

Para o controle de estado global, utilizei Redux e Redux-Toolkit.

E para o desenvolvimento dos testes, utilizei o Jest e o Testing Library.

Para as requisições, criei uma fake api com JSON-Server, que permite fazer a manipulação de um arquivo json com chamadas de API.

## Executando o projeto

Para começar, faça download ou clone o repositório

`git clone https://github.com/fabricio-ap/react-notepad.git`

Entre na pasta

`cd react-notepad`

Instale as dependencias

`npm install` ou `yarn install`

Rode a aplicação

`npm run dev` ou `yarn run dev`

## Metodologias

Neste projeto, utilizei basicamente dois patterns de desenvolvimento, o `Singleton` e `Composition`.

- `Singleton`: o design pattern Singleton previne que a gente tenha mais que uma instancia da mesma classe dentro do projeto.

- `Composition`: o design pattern Componsition, ou pattern de Composição, nos ajuda a quebrar um componente em vários subcomponentes menores. Isso ajuda com o gerenciamento de props, fazendo com que possamos lidar com as props separadamente sem criar propriedades a mais que não tenham necessidade.

## Créditos

List of contriubutors:

- [Singleton](https://refactoring.guru/design-patterns/singleton/typescript/example)
- [Composição](https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj)

## Licença

MIT license @ [Fabrício Araújo](https://github.com/fabricio-ap)
