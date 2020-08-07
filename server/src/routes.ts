import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesControler';

const routes = express.Router();
const classesControlers = new ClassesController();

routes.get('/classes', classesControlers.index);
routes.post('/classes' , classesControlers.create);


export default routes;