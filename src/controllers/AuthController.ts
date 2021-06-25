import { NextFunction, Request, Response } from "express";
import { AuthService } from '../services/AuthService';

interface ITokenPayload {
    id: string,
    iat: number,
    exp: number
}

class AuthController {
    async authentication(request: Request, response: Response){
        const {email, password} = request.body;
        const authService = new AuthService();

        try {
            const authReturnJwt = await authService.AuthUser(email, password);
            return response.json({
                authReturnJwt
            })
        } catch (error) {
            return error.message
        }
    }

    async IsAuthorized(request: Request, response: Response, next: NextFunction){
        const { authorization } = request.headers;
        const authService = new AuthService();

        if(!authorization) {
            return response.sendStatus(400);
        }

        const dataAuth = await authService.IsAuthorizedReq(authorization)
        const { id } = dataAuth as ITokenPayload;
        request.userId = id;
        
        return next();
    }

}

export { AuthController }