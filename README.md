# Notepad

- [Sobre o projeto](#sobre-o-projeto)
- [Demonstração](#Demonstração)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Executando o projeto](#executando-o-projeto)
- [Metodologias](#metodologias)
- [Créditos](#créditos)
- [Conheça meu trabalho](#conheça-meu-trabalho)
- [Licença](#licença)

## Sobre o projeto

O Notepad é um projeto criado com inspiração no Google Keep, que básicamente um bloco de notas onde tentei explorar alguns conceitos de React e toda sua composição, como os hooks, manipulação de listas, requisições HTTP e responsividade.

Ele funciona com a manipulação de anotações em uma fake api, criada com o `json-server`.

O projeto permite que o usuário crie anotações com título, texto e marcadores. Também conta com pesquisa, filtros e fixação de notas.

Além de uma opção de troca de tema dinâmicamente, utilizando tokens de cores e o localStorage.

## Demonstração

![Screenshot](/src/assets/image/Screenshot.png)

## Tecnologias utilizadas

O projeto foi construido utilizando React, Typescript e Vite. Para os estilos, foi utilizado Styled-Components e Ant-Design para o Modal.

Para o gerenciamento de requisições, foram utilizados o Axios e React-Query para gerenciar as funções assíncronas.

Para o controle de estado global utilizei Redux e Redux-Toolkit.

E para o desenvolvimento dos testes, utilizei o Jest e o Testing Library.

Para o back-end, criei uma fake api com JSON-Server, que permite fazer a manipulação de um arquivo JSON com chamadas de API.

## Executando o projeto

Para começar, faça download ou clone o repositório

```bash
git clone https://github.com/fabricio-ap/react-notepad.git
```

Entre na pasta

```bash
cd react-notepad
```

Instale as dependencias, use npm ou yarn, o que quiser :)

```bash
yarn install
```

Rode a aplicação

```bash
yarn run dev
```

## Metodologias

Neste projeto, utilizei basicamente dois patterns de desenvolvimento, o `Singleton` e `Composition`.

- `Singleton`: o design pattern Singleton previne que a gente tenha mais que uma instancia da mesma classe dentro do projeto.

- `Composition`: o design pattern Componsition, ou pattern de Composição, nos ajuda a quebrar um componente em vários subcomponentes menores. Isso ajuda com o gerenciamento de props, fazendo com que possamos lidar com as props separadamente sem criar propriedades a mais que não tenham necessidade.

## Créditos

- [Inspiração para o design](https://www.behance.net/gallery/123490539/Noto-Notepad-app?tracking_source=search_projects|notepad)

- [Singleton](https://refactoring.guru/design-patterns/singleton/typescript/example)
- [Composição](https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj)

## Conheça meu trabalho

[![Github Badge](https://img.shields.io/badge/-Github-000?style=for-the-badge&logo=Github&logoColor=white&link=https://github.com/fabricio-ap/)](https://github.com/fabricio-ap/)
[![LinkedIn Badge](https://img.shields.io/badge/-LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge&link=https://www.linkedin.com/in/fabricioapereira/)](https://www.linkedin.com/in/fabricioapereira/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-FF0000?style=for-the-badge&labelColor=FF0000&logo=gmail&logoColor=white&link=mailto:<fabricioaraujo051@gmail.com>)](mailto:<fabricioaraujo051@gmail.com>)

## Licença

MIT license @ [Fabrício Araújo](https://github.com/fabricio-ap)
