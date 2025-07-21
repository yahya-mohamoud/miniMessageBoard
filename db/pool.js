import dotenv from 'dotenv'
import { Pool } from 'pg';

dotenv.config()
const pool = new Pool ({
    connectionString: 'postgresql://neondb_owner:npg_msbViW83HDfo@ep-polished-union-affcekdi-pooler.c-2.us-west-2.aws.neon.tech/messages?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false,
    }
    // user: process.env.user,
    // host: process.env.host,
    // database: process.env.database,
    // password: process.env.password,
    // port: process.env.DB_port,
}) 

export default pool;