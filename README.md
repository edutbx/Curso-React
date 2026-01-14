# Organo

## Sobre

Organo é uma aplicação front-end em React que reúne componentes reutilizáveis para criar uma interface simples de cadastro e exibição de itens (por exemplo, roupas). O propósito deste projeto é demonstrar componentes React, comunicação entre componentes e gerenciamento básico de estado no front-end.

## Estrutura do projeto

- **package.json**: dependências e scripts do projeto.
- **public/**: arquivo HTML principal e assets (imagens em `public/imagens`).
- **src/**: código fonte React, ponto de entrada e componentes.
	- **src/App.js** e **src/index.js**: inicialização da aplicação.
	- **src/componentes/**: componentes reutilizáveis (Banner, Botao, CampoTexto, Colecao, Formulario, ListaSuspensa, Rodape, Roupas).

## Funcionalidades

- **Formulário**: coleta dados do usuário via `CampoTexto`, `ListaSuspensa` e envia usando `Botao`.
- **Coleção dinâmica**: itens adicionados aparecem na área de coleção (`Colecao`/`Roupas`).
- **Estilos por componente**: cada componente possui seu arquivo CSS (ex.: `Formulario.css`, `Banner.css`).
- **Assets**: imagens em `public/imagens` usadas pela interface.

## Como executar (desenvolvimento)

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm start
```

O app será aberto em `http://localhost:3000` por padrão.

## Projeto desenvolvido junto ao curso da Alura 'React: desenvolvendo com JavaScript da Alura. '

