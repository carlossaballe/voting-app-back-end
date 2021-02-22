import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PingResolver } from './resolvers/ping';
import { CandidateResolver } from './resolvers/CandidateResolver';
//import cors from 'cors'

export async function startServer() {
    const app = express();
    //app.use(cors());

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, CandidateResolver]
        }),
        context: ({req, res}) => ({req, res})
    });
    
    server.applyMiddleware({ app, path: '/graphql' });

    return app;
}