import { Router } from 'express'
import { AuthController } from './controllers/AuthController';
import { UsersController } from './controllers/UsersControllers';

const routes = Router();
const usersController = new UsersController();
const authController = new AuthController();


routes.post("/users", usersController.create);
routes.post("/auth", authController.authentication);
routes.get("/users", authController.IsAuthorized, usersController.index);

export { routes }