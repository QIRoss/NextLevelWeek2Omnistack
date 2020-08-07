import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControlers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControlers.index);
routes.post('/classes' , classesControlers.create);

routes.post('connections', connectionsController.create);


export default routes;