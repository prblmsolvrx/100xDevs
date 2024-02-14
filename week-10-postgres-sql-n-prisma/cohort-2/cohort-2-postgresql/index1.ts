//write a function to create a users table in database

import { Client } from 'pg';
const client = new Client({
    connectionString: "postgresql://realgoblu:xny9aqezZhJ7@ep-twilight-poetry-70707749.ap-southeast-1.aws.neon.tech/test?sslmode=require"
});
async function createUsersTable() {
        client.connect();
        const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log(result);  
}
createUsersTable();
