const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

//login
routes.post('/sessions', sessionController.create); 
/**
 * ONG
 */
//listagem de ongs
routes.get('/ongs', ongController.index);

//cadastro de ongs
routes.post('/ongs', ongController.create);

//profile da ong/ serve para trazer os casos devido a ong
routes.get('/profile', profileController.index);

/**
 * CASO
 */
//listando os  casos
routes.get('/incidents', incidentController.index);

//criando um novo caso
routes.post('/incidents', incidentController.create);

//deletando um caso
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;