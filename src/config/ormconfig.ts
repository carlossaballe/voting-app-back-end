import { Candidate } from '../entity/Candidate';

module.exports = {
    type: 'sqlite',
    database:'src/database/database.db',
    synchronize: true,
    logging: false,
    entities: [ Candidate ],
    seeds: ['src/database/seeds/*.ts'],
    factories: ['src/database/factories/*.ts'],
    dropSchema: true
}