import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Candidate  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;
    
    @Column()
    lastname!: string;

    @Column('int')
    age!: number;
    
    @Column()
    slogan!: string;

    @Column()
    votes!: number;
}