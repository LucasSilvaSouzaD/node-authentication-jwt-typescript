import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
    index(request: Request, response: Response){
        return response.send({
            user: request.userId
        })
    }
    async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const usersService = new UsersService();

        try {
            const user = await usersService.create(email, password);
            return response.json(user);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            })
        } 
    }
}

export { UsersController };