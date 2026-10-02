// Puxamos o Express para dentro do nosso arquivo
const express = require('express');

// Inicializamos o aplicativo do servidor
const app = express();

// Definimos em qual porta do nosso computador o servidor vai rodar
const porta = 3000;

// Criamos nossa primeira rota (o caminho principal "/")
app.get('/', (req, res) => {
  res.send('Servidor da Maratona de Filmes rodando perfeitamente! 🍿');
});

// Segunda rota

const filmes = [
  {
    titulo: 'Harry Potter e a Pedra Filosofal',
    genero: 'Fantasia',
    duracaoEmMinutos: 152
  },
  {
    titulo: 'Interestelar',
    genero: 'Ficção Cientifica',
    duracaoEmMinutos: 269
  }
];

filmes[1].duracaoEmMinutos = 169;
filmes.push({
    titulo: 'Senhor dos aneis A sociedade do anel',
    genero: 'Fantasia',
    duracaoEmMinutos: 178
  });

app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// Mandamos o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});