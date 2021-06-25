import {Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password, 8);
    };

    constructor() {
        !this.id ? this.id = uuid() : this.id;
    }
}

export { User };