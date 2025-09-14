import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserRole} from "../types";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false, unique: false })
    password: string;

    @Column({ nullable: true, unique: false })
    displayName: string;

    @Column({ nullable: true, unique: false })
    picture: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.REGULAR,
    })
    role: UserRole;
}