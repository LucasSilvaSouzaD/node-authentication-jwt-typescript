import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


class AuthService {
    private usersRepository: Repository<User>
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async AuthUser(email: string, password: string){

        const user = await this.usersRepository.findOne({
            where: { email }
        })

        if(!user){
            throw new Error("User not exists");
            ;
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            throw new Error("Password Invalid");
        }

        const token = jwt.sign({ id: user.id }, "secret", {expiresIn: '1d'});
        delete user.password
        const retorno = {
            user,
            token
        }
        
        return retorno;
    }

    async IsAuthorizedReq(authorization: string){
        const token = authorization.replace('Bearer', '').trim();
        const data = jwt.verify(token, "secret");

        return data
    }

}

export { AuthService }