import dotenv from 'dotenv'
import { Pool } from 'pg';

dotenv.config()
const pool = new Pool ({
    connectionString: process.env.databaseUrl,
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