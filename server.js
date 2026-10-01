// 1. Puxamos o Express para dentro do nosso arquivo
const express = require('express');

// 2. Inicializamos o aplicativo do servidor
const app = express();

// 3. Definimos em qual porta do nosso computador o servidor vai rodar
const porta = 3000;

// 4. Criamos nossa primeira rota (o caminho principal "/")
app.get('/', (req, res) => {
  res.send('Servidor da Maratona de Filmes rodando perfeitamente! 🍿');
});

// 5. Mandamos o servidor ligar e ficar "ouvindo" a porta 3000
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});