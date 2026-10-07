// Puxa o Express para dentro do arquivo
const express = require('express');

// Inicializa o aplicativo do servidor
const app = express();

// Defini em qual porta do computador o servidor vai rodar
const porta = 3000;

// Cria a primeira rota (o caminho principal "/")
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

// Manda o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get('/filmes/fantasia', (req, res) => {
  const filmesDeFantasia = filmes.filter(filme => filme.genero === 'Fantasia');
  res.json(filmesDeFantasia)
})