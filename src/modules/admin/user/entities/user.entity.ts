import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'users',
})
export class UserEntity {
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number;

    @Column({
        name: 'username',
        type: 'varchar',
        length: '250',
        unique: true,
        nullable: false,
    })
    username: string;

    @Column({
        name: 'email',
        type: 'varchar',
        length: '250',
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        name: 'password',
        type: 'varchar',
        length: '260',
        nullable: false,
    })
    password: string;
}
