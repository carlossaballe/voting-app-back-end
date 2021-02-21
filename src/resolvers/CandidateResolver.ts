import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';
import { Candidate } from '../entity/Candidate';

@InputType()
class CandidateInfo {
    @Field()
    firstname!: string

    @Field()
    lastname!: string
    
    @Field()
    age!: number
    
    @Field()
    slogan!: string
    
    @Field()
    votes!: number
}

@InputType()
class UpdateCandidateInfo {
    @Field(() => String, {nullable: true})
    firstname?: string

    @Field(() => String, {nullable: true})
    lastname?: string
    
    @Field(() => Int, {nullable: true})
    age?: number
    
    @Field(() => String, {nullable: true})
    slogan?: string
    
    @Field(() => Int, {nullable: true})
    votes?: number
}

@Resolver()
export class CandidateResolver {

    @Mutation(() => Candidate)
    async createCandidate( 
        @Arg('info', () => CandidateInfo) info: CandidateInfo
    ) 
    {
        const newCandidate = Candidate.create(info);
        console.log(newCandidate);
        return await newCandidate.save(); 
    }

    @Mutation(() => Boolean)
    async updateVotes(
        @Arg('id', () => Int) id: number,
        @Arg('data', () => UpdateCandidateInfo) data: UpdateCandidateInfo,
    ) {
        await Candidate.update({ id }, data );
        return true;
    }

    @Query(() => [Candidate])
    getCandidates() {
        return Candidate.find()
    }
}