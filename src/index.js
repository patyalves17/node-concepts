const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log('title', title);
  console.log('owner', owner);

  return response.json(['Projeto 1', 'Projeto 2']);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log('title', title);
  console.log('owner', owner);

  return response.json(['Projeto 1', 'Projeto 2', 'Project 3']);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json(['Projeto 1abc', 'Projeto 2', 'Project 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 1abc', 'Project 3']);
});

app.listen(3333, () => {
  console.log('🤓 started on 3333');
});
