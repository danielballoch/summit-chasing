import createClient from 'serverless-pg';

const dbClient = createClient({
  config: {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.NAME,
  },
  onConnect: () => {console.log('connected to database')},
  onClose: () => {console.log('disconnected from database')},
  beforeQuery: () => {},
  afterQuery: () => {},
});

export default dbClient;