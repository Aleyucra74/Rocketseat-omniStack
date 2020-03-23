const express = require('express');

const app = express();

app.get('/contato', (request, response) => {
    return response.send('Hello word');
});

app.listen(3333);