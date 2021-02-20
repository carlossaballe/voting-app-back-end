import { createConnection } from 'typeorm';

export async function connect() {
    await createConnection({
        type: 'sqlite',
        database:'./database/database.db',
        synchronize: true,
        logging: false,
        entities: [
            'src/entity/**/*.ts'
        ]
    });
    console.log('Database is connected');
}