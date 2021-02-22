import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Candidate } from '../../entity/Candidate'

export default class CreateCandidates implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(Candidate)().createMany(20)
    }
}