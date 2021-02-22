import { createConnection } from 'typeorm';
const config = require('./ormconfig')

export async function connect() {
    await createConnection( config );
    console.log('Database is connected');
}