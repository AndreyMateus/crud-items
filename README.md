# CRUD Simples em Node.js com Express

Este projeto implementa um CRUD básico (Create, Read, Update, Delete) utilizando Node.js com a biblioteca Express. Os dados são armazenados em um arquivo JSON local (`data/db.json`), simulando um banco de dados.

**O CRUD segue o conceito de uma minimal API.**

---

## 📦 Requisitos

- Node.js (v14 ou superior)

---

## 🚀 Instalação

```bash
0 - Clone/Baixe o projeto para seu computador.
Exemplo: git clone https://github.com/AndreyMateus/crud-items

1 - Entre na pasta do Projeto VIA CLI(TERMINAL).
Exemplo: cd crud-items

2 - Instale a dependências (node_modules)
Exemplo: npm install

3 - Rode o projeto.
Exemplo: node server.js

4 - acesse através do link gerado pelo terminal ou pelo Postman/Httpie ou outro.

```

## Rotas

| Método | Rota         | Descrição                  |
| ------ | ------------ | -------------------------- |
| GET    | `/items`     | Lista todos os itens       |
| POST   | `/items`     | Cria um novo item          |
| PUT    | `/items/:id` | Atualiza um item existente |
| DELETE | `/items/:id` | Remove um item existente   |

Exemplo GET: `http://localhost:3000/items`

---

## Documentação pelo POSTMAN

Acesse o link: [Clique aqui](https://documenter.getpostman.com/view/19027548/2sB2qUnjnb)
