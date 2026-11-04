// Puxa o Express para dentro do arquivo
const express = require('express');

// Inicializa o aplicativo do servidor
const app = express();

// Defini em qual porta do computador o servidor vai rodar
const porta = 3000;

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

function encontrarFilmeMaisLongo(listaFilmes) {
  if (listaFilmes.length === 0) {
    return null;
  }

  let maisLongo = listaFilmes[0];

  for (const filme of listaFilmes) {
    if (filme.duracaoEmMinutos > maisLongo.duracaoEmMinutos) {
      maisLongo = filme;
    }
  }

  return maisLongo;
}

function formatarDuracao(totalMinutos) {
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;

  return `${horas}h ${minutos}min`;
} 

function calcularDuracaoTotal(listaFilmes) {
  let totalMinutos = 0;

  for (const filme of listaFilmes) {
    totalMinutos += filme.duracaoEmMinutos;
  }

  return totalMinutos;
}

app.get('/', (req, res) => {
  if (req.query.titulo !== undefined && typeof req.query.titulo !== 'string') {
    return res.status(400).send('Informe apenas um título na busca.');
  }

  if (req.query.genero !== undefined && typeof req.query.genero !== 'string') {
    return res.status(400).send('Informe apenas um gênero na busca.');
  }

  const tituloBuscado = (req.query.titulo || '').trim().toLowerCase();
  const generoBuscado = (req.query.genero || '').trim().toLowerCase();

  const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(tituloBuscado) && (generoBuscado === '' || filme.genero.toLowerCase() === generoBuscado)
  );

  let html = `
    <h1>Meus Filmes</h1>

  <form action="/" method="GET">
    <label for="genero">Gênero:</label>
    <select name="genero" id="genero">
    <option value="">Todos</option>
    `
    const generos = filmes.map(filme => filme.genero);
    const generosUnicos = [...new Set(generos)];

    for (const genero of generosUnicos){
      const selecionado = genero.toLowerCase() === generoBuscado ? 'selected' : '';

      html += `<option value="${genero}" ${selecionado}>${genero}</option>`;
    }

    html += `</select>`;
    const titulos = filmes.map(filme => filme.titulo);

    html += `<label for="titulo">Título:</label>
           <select name="titulo" id="titulo">
           <option value="">Todos</option>`

    for (const titulo of titulos){
      const selecionado = titulo.toLowerCase() === tituloBuscado? 'selected' : '';

      html += `<option value="${titulo}" ${selecionado}>${titulo}</option>`;
    }

    html += `</select>

    <button type="submit">Buscar</button>
  </form>

  <ul>
`;

  for (const filme of filmesFiltrados) {
    html += `
      <li>
        <h2>${filme.titulo}</h2>
        <p>ID: ${filme.id}</p>
        <p>Gênero: ${filme.genero}</p>
        <p>Duração: ${formatarDuracao(filme.duracaoEmMinutos)}</p>
      </li>
    `;
  }

  const duracaoTotal = calcularDuracaoTotal(filmesFiltrados);
  const filmeLongo = encontrarFilmeMaisLongo(filmesFiltrados);

  html += `
    </ul>
    <p><strong>Total de filmes: ${filmesFiltrados.length}</strong></p>
    <p><strong>Tempo da maratona: ${formatarDuracao(duracaoTotal)}</strong></p>
  `;

  if (filmeLongo) {
    html += `
      <p>
        Filme mais longo: ${filmeLongo.titulo}
        — ${formatarDuracao(filmeLongo.duracaoEmMinutos)}
      </p>
    `;
  }

  if (filmesFiltrados.length === 0) {
  html += '<p>Nenhum filme encontrado. Tente outro título.</p>';
  }

  if (tituloBuscado || generoBuscado) {
  html += `<a href="/">Mostrar todos os filmes</a>`;
  }

  res.send(html);
});

app.get('/filmes', (req, res) => {
  const filmesTotais = filmes.length;
  res.json(filmesTotais);
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

// Manda o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});


