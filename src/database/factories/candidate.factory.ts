import { define } from 'typeorm-seeding';
import { Candidate } from "../../entity/Candidate";
import Faker from 'faker'

define(Candidate, (faker: typeof Faker) => {

    const _firstname = faker.name.firstName()
    const _lastname = faker.name.lastName()
    const _age = faker.random.number({ 'min': 18, 'max': 60 });
    const _slogan = faker.lorem.sentence(10);
    const _votes = faker.random.number({ 'min': 0, 'max': 10 });
  
    const candidate = new Candidate();
    candidate.firstname = _firstname;
    candidate.lastname = _lastname;
    candidate.age = _age;
    candidate.slogan = _slogan;
    candidate.votes = _votes;
    return candidate
})