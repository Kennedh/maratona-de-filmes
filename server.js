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
filmes.push({
    titulo: 'Sexta-Feira 13 (1980)',
    genero: 'Terror',
    duracaoEmMinutos: 95
  });

app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// Manda o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get('/filmes/genero/:genero', (req, res) => {
  const generoBuscado = req.params.genero;
  const filmesFiltrados = filmes.filter(filme => filme.genero === generoBuscado);
  if (filmesFiltrados.length === 0) {
    console.log(`Nenhum filme encontrado para o gênero ${generoBuscado}`);
  }
  res.json(filmesFiltrados)
})

