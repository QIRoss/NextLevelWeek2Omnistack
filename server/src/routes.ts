import express, { request, response } from 'express';
import db from './database/connection'; 

const routes = express.Router();

routes.post('/classes' , async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    // await db('classes').insert({
    //     subject,
    //     cost,
    // });

    return response.send();
});

routes.get('/classes', (request, response) => {
    const data = db('users').select('id', 'name');
    console.log(data.toSQL);

    return response.send();
});

export default routes;