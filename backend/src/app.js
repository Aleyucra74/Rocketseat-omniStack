const express = require('express');
const cors = require('cors');
const { errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
/** 
 * Rota / Recurso 
*/

/**
 *  metodos http:
 * 
 * GET :buscar uma informacao do back-end
 * POST :criar uma informacao no back-end
 * PUT :alterar uma informacao no back-end
 * DELETE :deleta uma informacao no back-end
 * 
*/
/**
 * request: guarda todos os dados na requisicao do usuario
 * response: responsavel por retornar uma resposta para o usuario
 * 
 */


/**
 * tipos de parametros:
 * 
 * query params: parametros  nomeados enviados na rota apos *?* (filtros, paginaçao)
 * route params: parametros utilizados para identificar recursos
 * request body: corpo da requisiçao, utilizado para criar ou alterar recursos
 * 
 */

/**
 * BD
 * 
 * SQL: MYSQL, SQLite, POSTGRESQL, ORACLE, MS SQL server
 * Nosql: mongodb, couchdb, etc
 * 
 */

 /**
  * Driver: select * from users
  * Query builder: table('users').selecr('*').where()
  */
app.use(routes);
app.use(errors());

module.exports = app;