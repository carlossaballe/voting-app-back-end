import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Candidate extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    firstname!: string;
    
    @Field(() => String)
    @Column()
    lastname!: string;

    @Field(() => Int)
    @Column('int')
    age!: number;
    
    @Field(() => String)
    @Column()
    slogan!: string;

    @Field(() => Int)
    @Column()
    votes!: number;
}