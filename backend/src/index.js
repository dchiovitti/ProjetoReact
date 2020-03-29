const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333); 


/*
*ROTA /RECURSO
*/

/*
*Métodos http: 
GET: Buscar informação do back-end (funciona pra tudo com limitações)
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/
/*
*Tipos de parametros
Query Params: Parametros nomeados enviados na rota após simbolo de ? para filtros, paginação etc
Route Params: Parametros utilizados para identificar recursos
Requeste Body: 
*/
/*
* SQL: MySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL SErver
NoSQL: MongoDB, CouchDB, etc

Driver: SELECT * from uses
Query Builder: table('users'.select('*').where)
 */

