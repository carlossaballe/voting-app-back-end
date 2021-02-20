import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Candidate } from '../entity/Candidate';

@Resolver()
export class CandidateResolver {

    @Mutation(() => Boolean)
    async createCandidate(
        @Arg('firstname') firstname: string,
        @Arg('lastname') lastname: string,
        @Arg('age') age: number,
        @Arg('slogan') slogan: string,
        @Arg('votes') votes: number,
    )
    {
        Candidate.insert({firstname, lastname, age, slogan, votes})
        console.log(firstname, lastname, age, slogan, votes);
        return true;
    }
}