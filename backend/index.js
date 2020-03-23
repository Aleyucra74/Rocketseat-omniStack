const express = require('express');

const app = express();

app.get('/contato', (request, response) => {
    return response.json({
        evento: 'Semana omnistack',
        aluno: 'alexandre y'
    });
});

app.listen(3333);