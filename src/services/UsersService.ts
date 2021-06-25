import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    private usersRepository: Repository<User>
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string, password: string){
        
        const emailExistes = await this.usersRepository.findOne({
            email,
        });

        if(emailExistes) {
             throw new Error("Errorrr");
        }

        const user = this.usersRepository.create({
            email,
            password
        });

        await this.usersRepository.save(user);

        return user;
    }

    
}

export { UsersService }