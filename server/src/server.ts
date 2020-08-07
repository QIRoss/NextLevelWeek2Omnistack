import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

//GET, POST, PUT, DELETE

//BODY request.body
//ROUTE PARAMS -- identificar qual recurso atualizar 
//QUERY PARAMS -- paginação, filtros, ordenação