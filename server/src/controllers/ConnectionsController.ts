import { Request, Response } from 'express';
const db = require('../database/connection');

export default class ConnectionsController {
    async index(request: Request, response: Response) {

    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({
            user_id,
        });

        return response.status(201).send();
    }
}