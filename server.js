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
    id: 1,
    titulo: 'Harry Potter e a Pedra Filosofal',
    genero: 'Fantasia',
    duracaoEmMinutos: 152
  },
  {
    id: 2,
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    duracaoEmMinutos: 169
  },
  {
    id: 3,
    titulo: 'Senhor dos Anéis: A Sociedade do Anel',
    genero: 'Fantasia',
    duracaoEmMinutos: 178
  },
  {
    id: 4,
    titulo: 'Sexta-Feira 13 (1980)',
    genero: 'Terror',
    duracaoEmMinutos: 95
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

app.get('/filmes/id/:id', (req, res) => {
  const idBuscado = Number(req.params.id);

  if (!Number.isInteger(idBuscado) || idBuscado <= 0) {
    return res.status(400).json({
      mensagem: 'Informe um ID inteiro positivo.'
    });
  }

  const filmeEncontrado = filmes.find(filme => filme.id === idBuscado);

  if (!filmeEncontrado) {
    return res.status(404).json({
      mensagem: 'Filme não encontrado.'
    });
  }

  res.json(filmeEncontrado);
});

// Manda o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

app.get('/filmes/genero/:genero', (req, res) => {
  const generoBuscado = req.params.genero.toLowerCase();
  const filmesFiltrados = filmes.filter(filme => filme.genero.toLowerCase() === generoBuscado);
  if (filmesFiltrados.length === 0) {
    console.log(`Nenhum filme encontrado para o gênero ${generoBuscado}`);
  }
  res.json(filmesFiltrados)
})

app.get('/filmes/titulo/:titulo', (req, res) => {
  const tituloBuscado = req.params.titulo.toLowerCase();
  const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(tituloBuscado));
  if (filmesFiltrados.length === 0) {
    console.log(`Nenhum filme encontrado para o titulo ${tituloBuscado}`);
  }
  res.json(filmesFiltrados)
})


