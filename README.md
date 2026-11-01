# 🎬 Maratona de Filmes

Projeto em desenvolvimento para organizar maratonas de filmes e colocar em prática meus estudos de desenvolvimento full stack.

A ideia é construir a aplicação por etapas, desde a criação do servidor até a integração com uma interface e um banco de dados.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Express

## 🚧 Progresso

- [x] Configuração inicial do projeto
- [x] Servidor com Express
- [x] Listagem de filmes na página inicial
- [x] Busca por título no formulário, ignorando maiúsculas e minúsculas
- [x] Contagem, duração total e filme mais longo conforme os resultados da busca
- [x] Mensagem para buscas sem resultados e link para mostrar todos os filmes
- [x] Rotas JSON para consultar quantidade de filmes e buscar por ID, gênero e título
- [x] Validação de IDs inválidos e tratamento de filmes não encontrados por ID
- [ ] Tratamento de parâmetros repetidos na busca por título
- [ ] Cadastro de filmes
- [ ] Interface para organizar as maratonas
- [ ] Persistência em banco de dados
- [ ] Integração entre front-end e back-end

Por enquanto, os filmes ficam em um array no servidor, sem persistência em arquivo ou banco de dados.

## ▶️ Como executar

Com Node.js e npm instalados, abra o terminal na pasta do projeto e execute:

```bash
npm install
node server.js
```

Depois, acesse **http://localhost:3000** para ver a lista de filmes e buscar pelo título.

## 📚 Objetivo

Aprender na prática como uma aplicação full stack funciona, trabalhando com rotas, regras de negócio, armazenamento de dados e comunicação entre front-end e back-end.

---

Desenvolvido por **Kennedh Custódio Marcellino**.
